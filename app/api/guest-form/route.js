import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, MAIL_TO, MAIL_FROM } = process.env;

const missingConfig = [SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS].some(value => !value);

const transporter = !missingConfig
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true' || Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

export async function POST(request) {
  if (missingConfig || !transporter) {
    return NextResponse.json(
      { message: 'Почтовый сервис не сконфигурирован. Проверьте SMTP переменные окружения.' },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const { name = '', attendance = '', drinks = '', dishes = '' } = body || {};

    if (!name || !attendance || !drinks || !dishes) {
      return NextResponse.json({ message: 'Заполните все обязательные поля' }, { status: 400 });
    }

    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO || SMTP_USER,
      subject: 'Новая анкета гостя',
      html: `
        <h3>Гость заполнил анкету!</h3>
        <p><b>Имя и фамилия:</b> ${name}</p>
        <p><b>Сможет ли присутствовать:</b> ${attendance}</p>
        <p><b>Предпочтения по напиткам:</b><br/> ${drinks}</p>
        <p><b>Предпочтения по горячему:</b><br/> ${dishes}</p>
      `,
    });

    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Guest form send error', error);
    return NextResponse.json({ message: 'Не удалось отправить письмо' }, { status: 500 });
  }
}
