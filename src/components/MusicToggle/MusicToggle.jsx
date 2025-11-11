'use client';
import { Box, Circle } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

import useAudioPlayer from './useAudioPlayer';
import MusicIcon from './MusicIcon';

const pulse = keyframes`
  0%   { opacity: 1; }
  45%  { opacity: 0; }
  60%  { opacity: 0; }
  100% { opacity: 1; }
`;

const MusicToggle = () => {
  const { isPlaying, toggle } = useAudioPlayer('/audio/music.mp3');

  return (
    <Box
      position="fixed"
      inset={{ mobile: '-5px -5px auto auto', laptop: '10px 10px auto auto' }}
      zIndex="docked"
    >
      <Box position="relative" boxSize={{ mobile: '60px', tablet: '80px', laptop: '120px' }}>
        <Circle
          size={{ mobile: '30px', tablet: '40px', laptop: '60px' }}
          bg="ourAccent"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          cursor="pointer"
          animation={!isPlaying && `${pulse} 2.5s linear infinite`}
          onClick={toggle}
          zIndex="2"
        >
          <MusicIcon isMuted={!isPlaying} />
        </Circle>

        <Box boxSize="full" opacity={isPlaying ? 0 : 1} transition="opacity .3s" zIndex="1">
          <Box
            as="svg"
            boxSize="full"
            viewBox="0 0 120 120"
            pointerEvents="none"
            animation={!isPlaying && `${pulse} 2.5s linear infinite`}
          >
            <defs>
              <path id="musicToggleCircle" d="M60 60 m-42,0 a42,42 0 1,0 84,0 a42,42 0 1,0 -84,0" />
            </defs>

            <text fontSize={11} letterSpacing="1" fill="#000">
              <textPath href="#musicToggleCircle" startOffset="5%">
                Включите музыку
              </textPath>
            </text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicToggle;
