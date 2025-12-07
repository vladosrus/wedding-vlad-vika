import { Button, Text } from '@chakra-ui/react';
import CustomOverlayLink from 'components/CustomOverlayLink';
import { memo } from 'react';

const CustomButton = ({ text, link = null, textProps = null, ...props }) => (
  <Button
    type="button"
    pos="relative"
    w="full"
    maxW={{ mobile: '240px', laptop: '260px' }}
    h="unset"
    bg="ourAccent"
    color="white"
    textAlign="center"
    alignSelf="center"
    borderRadius="10px"
    py={{ mobile: '12px', laptop: '14px' }}
    px={{ mobile: '18px', laptop: '20px' }}
    _hover={{ bg: '#c75f82' }}
    transition="all .3s"
    _disabled={{ bg: 'ourGray', color: 'rgba(20, 12, 64, 0.6)' }}
    {...props}
  >
    {link && <CustomOverlayLink link={link} title={text} isExternal />}

    <Text
      position="relative"
      zIndex="1"
      fontWeight="700"
      fontSize={{ mobile: '14px', laptop: '16px' }}
      letterSpacing="0.5px"
      lineHeight="0.9"
      {...textProps}
    >
      {text}
    </Text>
  </Button>
);

export default memo(CustomButton);
