import { Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';

import SectionWrapper from 'components/SectionWrapper';
import EventItem from './EventItem';

import Zags from 'assets/illustrations/eventPlan/zags.jpg';
import Neva from 'assets/illustrations/eventPlan/neva.jpg';
import Zakat from 'assets/illustrations/eventPlan/zakat.jpg';
import ZagorodnayaPloshchadka from 'assets/illustrations/eventPlan/zagorodnaya_ploshchadka.jpg';
import Ceremoniya from 'assets/illustrations/eventPlan/ceremoniya.jpeg';
import Banket from 'assets/illustrations/eventPlan/banket.jpg';
import Party from 'assets/illustrations/eventPlan/party.jpg';

const schedule = [
  {
    date: '22/07/2026',
    events: [
      {
        time: '17:30',
        title:
          'ЗАГС (<a href="https://yandex.ru/navi/org/dvorets_brakosochetaniya_1/1311913400?si=jcxh3fr463x5p7u5ekttb5g5tm" target="_blank" title="Посмотрите где это на Яндекс.Картах" style="color: #DB7093;">Английская набережная, 28</a>)',
        image: Zags,
        description:
          'Торжественная регистрация начнётся в 18:00 — будем рады, если вы приедете немного заранее, чтобы спокойно собраться и настроиться на эту важную для нас церемонию.',
      },
      {
        time: '19:30',
        timeNote: '(время может быть изменено)',
        title: 'Свадебная прогулка по Неве',
        image: Neva,
        description:
          'После регистрации, в 19:30, мы отправимся в маленькое путешествие по воде — на уютном речном трамвайчике. Нас ждёт лёгкое угощение, музыка, тёплые разговоры и много улыбок.',
      },
      {
        time: '21:30',
        title: 'Завершение свадебного вечера',
        image: Zakat,
        description:
          'В 21:30 мы завершим наш свадебный вечер — легко, тепло и по-семейному. А уже 25 июля будем счастливы снова видеть вас на продолжении праздника.',
      },
    ],
  },
  {
    date: '25/07/2026',
    events: [
      {
        time: '15:00',
        title: 'Сбор гостей',
        image: ZagorodnayaPloshchadka,
        description:
          'С 15:00 собираемся на загородной площадке — впереди ещё один тёплый свадебный день.',
      },
      {
        time: '15:30',
        title: 'Начало церемонии',
        image: Ceremoniya,
        description: 'Выездная церемония начнётся в 15:30, сразу после неё — фотосессия.',
      },
      {
        time: '16:00',
        title: 'Начало банкета',
        image: Banket,
        description:
          'В 16:00 открывается банкет — уютная и весёлая часть нашего свадебного дня с любимыми гостями.',
      },
      {
        time: '22:00',
        title: 'Окончание вечера',
        image: Party,
        description:
          'В 22:00 прощаемся со свадебным днём, завершая его сиянием бенгальских огней и улыбками гостей.',
      },
    ],
  },
];

const EventPlan = () => (
  <SectionWrapper id="event-plan">
    <VStack w="full" maxW="1000px" gap={{ mobile: '22px', laptop: '28px' }}>
      <Text as="h2" fontSize={{ mobile: '26px', laptop: '36px' }} textAlign="center">
        План мероприятий
      </Text>

      <Tabs variant="unstyled" w="full" isLazy lazyBehavior="unmount">
        <TabList
          display="grid"
          gridTemplateColumns={`repeat(${schedule.length}, 1fr)`}
          gap="8px"
          bg="rgba(20, 12, 64, 0.04)"
          p="6px"
          borderRadius="18px"
          border="1px solid"
          borderColor="ourGray"
        >
          {schedule.map(({ date }) => (
            <Tab
              key={date}
              borderRadius="12px"
              fontWeight="600"
              p={{ mobile: '10px', laptop: '14px 18px' }}
              _selected={{
                bg: 'white',
                color: 'ourAccent',
                boxShadow: '0 6px 24px rgba(20, 12, 64, 0.12)',
              }}
            >
              {date}
            </Tab>
          ))}
        </TabList>

        <TabPanels mt={{ mobile: '12px', laptop: '18px' }}>
          {schedule.map(({ date, events }) => (
            <TabPanel key={date} p="0">
              <VStack align="stretch" gap={{ mobile: '12px', laptop: '16px' }}>
                {events.map((eventData, index) => (
                  <EventItem
                    key={`${date}-${eventData.time}-${eventData.title}`}
                    index={index}
                    date={date}
                    {...eventData}
                  />
                ))}
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  </SectionWrapper>
);

export default EventPlan;
