'use client';
import { memo } from 'react';
import { useRouter } from 'next/navigation';

import NextImage from 'components/NextImage';

import PurpleStar from 'assets/icons/purpleStar.svg';

const EasterEggLink = () => {
  const router = useRouter();

  return (
    <NextImage
      src={PurpleStar}
      alt="Розовая звёздочка"
      w="35px"
      h="35px"
      onClick={() => router.push('/easter-egg')}
    />
  );
};

export default memo(EasterEggLink);
