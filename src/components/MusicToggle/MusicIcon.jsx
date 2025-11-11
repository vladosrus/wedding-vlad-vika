'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';

const slashVariants = {
  soundOn: { opacity: 0, pathLength: 0 },
  soundOff: { opacity: 1, pathLength: 1 },
};

const MusicIcon = ({ isMuted }) => (
  <motion.svg
    viewBox="0 0 64 64"
    width="70%"
    height="70%"
    initial={false}
    animate={isMuted ? 'soundOff' : 'soundOn'}
  >
    <path
      d="M26 20L14 28H8v8h6l12 8V20z"
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M36 24c4 4 4 12 0 16"
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M46 18c7 7 7 21 0 28"
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <motion.path
      d="M15 49L49 15"
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      variants={slashVariants}
      transition={{ duration: 0.3 }}
      style={{ pathLength: 1 }}
    />
  </motion.svg>
);

export default memo(MusicIcon);
