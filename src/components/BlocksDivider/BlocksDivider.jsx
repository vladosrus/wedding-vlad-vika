import { memo } from 'react';
import { Box, HStack } from '@chakra-ui/react';

import NextImage from 'components/NextImage';

import PurpleStar from 'assets/icons/purpleStar.svg';

const BlocksDivider = ({ ...props }) => (
  <HStack
    pt={{ mobile: '15px', laptop: '30px' }}
    pb={{ mobile: '10px', laptop: '20px' }}
    mx="auto"
    gap="8px"
  >
    <Box w="140px" h="1px" bg="ourBlack" {...props} />
    <NextImage src={PurpleStar} alt="Розовая звёздочка" w="35px" h="35px" />
    <Box w="140px" h="1px" bg="ourBlack" {...props} />
  </HStack>
);

export default memo(BlocksDivider);
