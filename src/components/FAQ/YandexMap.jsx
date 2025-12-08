'use client';
import { memo } from 'react';
import { Box, HStack, Skeleton, Text, useBoolean, VStack } from '@chakra-ui/react';
import { Map, Placemark as PlaceMark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';

import NextImage from 'components/NextImage';

import PurpleStar from 'assets/icons/purpleStar.svg';

const placeMarkProps = {
  options: { preset: 'islands#icon', iconColor: '#DB7093', balloonCloseButton: true },
  modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
};

const YandexMap = () => {
  return (
    <VStack w="full" align="start" gap={{ mobile: '10px', tablet: '12px', laptop: '16px' }}>
      <HStack w="full" align="flex-start" gap={{ mobile: '16px', tablet: '20px', laptop: '28px' }}>
        <NextImage
          src={PurpleStar}
          alt="Розовая звёздочка"
          w="auto"
          h="auto"
          boxSize={{ mobile: '24px', tablet: '26px', laptop: '28px' }}
        />

        <VStack w="full" align="start" gap={{ mobile: '10px', tablet: '12px', laptop: '16px' }}>
          <Text
            as="h3"
            fontSize={{ mobile: '20px', tablet: '22px', laptop: '24px' }}
            lineHeight="130%"
            fontWeight="700"
          >
            Где будут проходить мероприятия?
          </Text>
        </VStack>
      </HStack>

      <CustomMap mapCenter={[60.04, 30.4]} zoom={10.4} hideBelow="laptop" />
      <CustomMap mapCenter={[60.04, 30.4]} zoom={10.2} hideBelow="tablet" hideFrom="laptop" />
      <CustomMap mapCenter={[60.04, 30.4]} zoom={9.1} hideFrom="tablet" />
    </VStack>
  );
};

export default memo(YandexMap);

const CustomMap = ({ mapCenter, zoom, ...props }) => {
  const [isMapLoaded, setIsMapLoaded] = useBoolean(false);
  const [isMapActive, setIsMapActive] = useBoolean(false);

  return (
    <Box as={YMaps}>
      <Skeleton
        isLoaded={isMapLoaded}
        w="full"
        aspectRatio={{ mobile: '16 / 13', laptop: '16 / 11' }}
        startColor="bg.gray"
        endColor="bg.grayLight"
        borderRadius="18px"
        overflow="hidden"
        onClick={setIsMapActive.on}
        {...props}
      >
        <Box
          as={Map}
          state={{ center: mapCenter, zoom }}
          boxSize="full"
          borderRadius="18px"
          overflow="hidden"
          pointerEvents={isMapActive ? 'all' : 'none'}
          onLoad={setIsMapLoaded.on}
        >
          <PlaceMark
            geometry={[59.933918, 30.293945]}
            properties={{
              balloonContentHeader: 'ЗАГС',
              balloonContentBody: 'Английская набережная, 28',
              hintContent: 'ЗАГС',
            }}
            {...placeMarkProps}
          />

          <PlaceMark
            geometry={[60.136089, 30.524915]}
            properties={{
              balloonContentHeader: 'Выездная церемония',
              balloonContentBody: 'Всеволожский р-н, пос. Токсово, ул. Разъезжая, д. 11',
              hintContent: 'Выездная церемония',
            }}
            {...placeMarkProps}
          />

          <ZoomControl />
        </Box>
      </Skeleton>
    </Box>
  );
};
