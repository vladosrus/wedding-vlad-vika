import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, MAIL_TO_ME, MAIL_FROM } =
  process.env;

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
    const { name = '' } = body || {};

    if (!name) {
      return NextResponse.json({ message: 'Заполните все обязательные поля' }, { status: 400 });
    }

    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO_ME || SMTP_USER,
      subject: 'Пасхалка',
      html: `
          <h3>Кто-то нашёл пасхалку!!!</h3>
          <p><b>Имя и фамилия этого внимательного человека:</b> ${name}</p>
        `,
    });

    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Guest form send error', error);
    return NextResponse.json({ message: 'Не удалось отправить письмо' }, { status: 500 });
  }
}
