import { useEffect, useRef, useState } from 'react';

const useAudioPlayer = audioSrc => {
  const audioRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const markReady = () => setIsReady(true);
    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setHasError(true);

    audio.addEventListener('canplaythrough', markReady);
    audio.addEventListener('canplay', markReady);
    audio.addEventListener('loadeddata', markReady);
    audio.addEventListener('loadedmetadata', markReady);

    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    if (audio.readyState >= 2) setIsReady(true);

    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', markReady);
      audio.removeEventListener('canplay', markReady);
      audio.removeEventListener('loadeddata', markReady);
      audio.removeEventListener('loadedmetadata', markReady);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, [audioSrc]);

  const toggleMusic = async () => {
    if (hasError) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      setHasError(true);
    }
  };

  return { isReady, isPlaying, hasError, toggle: toggleMusic };
};

export default useAudioPlayer;
