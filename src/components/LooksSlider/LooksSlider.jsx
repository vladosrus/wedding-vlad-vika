'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import SectionWrapper from 'components/SectionWrapper';
import NextImage from 'components/NextImage';

import Look1 from 'assets/illustrations/looksSlider/1.jpg';
import Look2 from 'assets/illustrations/looksSlider/2.jpg';
import Look3 from 'assets/illustrations/looksSlider/3.png';
import Look4 from 'assets/illustrations/looksSlider/4.jpg';
import Look5 from 'assets/illustrations/looksSlider/5.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const looks = [
  { src: Look1, alt: 'Вариант наряда 1' },
  { src: Look2, alt: 'Вариант наряда 2' },
  { src: Look3, alt: 'Вариант наряда 3' },
  { src: Look4, alt: 'Вариант наряда 4' },
  { src: Look5, alt: 'Вариант наряда 5' },
];

const LooksSlider = () => (
  <SectionWrapper id="looks">
    <VStack w="full" maxW="1000px" gap={{ mobile: '18px', laptop: '26px' }}>
      <Text
        as="h2"
        fontSize={{ mobile: '26px', laptop: '36px' }}
        textAlign={{ mobile: 'center', laptop: 'left' }}
      >
        Палитра праздника
      </Text>

      <Text
        maxW={{ tablet: '450px', laptop: '610px' }}
        fontSize={{ mobile: '14px', laptop: '16px' }}
        lineHeight="150%"
        textAlign="center"
      >
        Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей
        палитры
      </Text>

      <Box
        w="full"
        sx={{
          '--swiper-pagination-color': '#DB7093',
          '--swiper-pagination-bullet-inactive-color': 'rgba(20, 12, 64, 0.26)',
          '.swiper': {
            display: 'flex',
            flexDir: 'column',
            gap: { mobile: '20px', laptop: '24px' },
          },
          '.swiper-pagination': { pos: 'relative' },
          '.swiper-pagination-bullet-active': {
            w: { laptop: '20px' },
            borderRadius: 'full',
            transition: 'all 0.3s ease',
          },
        }}
      >
        <Swiper
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={16}
          grabCursor
          effect="coverflow"
          coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
        >
          {looks.map(({ src, alt }) => (
            <SwiperSlide key={alt} style={{ width: 'auto' }}>
              <Center
                h={{ mobile: '300px', tablet: '420px', laptop: '520px' }}
                maxH="70vh"
                maxW={{ mobile: '90vw', laptop: '720px' }}
                borderRadius="5%"
                overflow="hidden"
                boxShadow="0 8px 28px rgba(20, 12, 64, 0.12)"
                bg="white"
              >
                <NextImage
                  src={src}
                  alt={alt}
                  h="100%"
                  w="auto"
                  objectFit="contain"
                  loading="lazy"
                />
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </VStack>
  </SectionWrapper>
);

export default LooksSlider;
