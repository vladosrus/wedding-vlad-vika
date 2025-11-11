import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

const SectionWrapper = ({ children, ...props }) => (
  <Flex
    as="section"
    w="full"
    justify="center"
    p={{ mobile: '14px 16px', laptop: '28px 32px' }}
    {...props}
  >
    {children}
  </Flex>
);

export default memo(SectionWrapper);
