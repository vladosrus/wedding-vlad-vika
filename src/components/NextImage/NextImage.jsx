import { memo } from 'react';
import NextImg from 'next/image';
import { Img } from '@chakra-ui/react';

const NextImage = ({ src, alt, h, w, ...props }) => (
  <Img as={NextImg} src={src} alt={alt} h={h} w={w} objectFit="cover" quality="100" {...props} />
);

export default memo(NextImage);
