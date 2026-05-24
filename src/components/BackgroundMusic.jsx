'use client';

import { useState, useEffect, useRef } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle first interaction to play music
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && isMounted && isPlaying) {
        audioRef.current.play().catch(() => {
          console.log('Autoplay blocked - waiting for user interaction');
        });
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isMounted, isPlaying]);

  useEffect(() => {
    if (!isMounted || !audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = volume;

    const playAudio = async () => {
      try {
        if (isPlaying) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (error) {
        console.log('Playback error:', error.message);
      }
    };

    playAudio();
  }, [isPlaying, isMounted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/music/hamo.mpeg"
        loop
        crossOrigin="anonymous"
        preload="auto"
      />

      {/* Music Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 z-40 flex flex-col gap-4 items-end"
      >
        {/* Volume Control - Show on hover */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isPlaying ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2 bg-dark-secondary/80 backdrop-blur border border-accent/30 rounded-lg p-4"
        >
          <label className="text-xs text-gray-400 font-semibold">Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #00d9ff 0%, #00d9ff ${
                volume * 100
              }%, #334155 ${volume * 100}%, #334155 100%)`,
            }}
          />
          <span className="text-xs text-accent font-semibold">
            {Math.round(volume * 100)}%
          </span>
        </motion.div>

        {/* Main Music Toggle Button */}
        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative w-14 h-14 rounded-full flex items-center justify-center
            font-bold text-white transition-all duration-300
            ${
              isPlaying
                ? 'bg-accent shadow-lg glow text-dark'
                : 'bg-dark-secondary border-2 border-accent/50 text-accent hover:border-accent'
            }
          `}
          title={isPlaying ? 'Stop Music' : 'Play Music'}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute"
            >
              <FaMusic size={20} />
            </motion.div>
          ) : (
            <FaVolumeMute size={20} />
          )}

          {/* Animated pulse ring when playing */}
          {isPlaying && (
            <>
              <motion.div
                animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-accent/30"
              />
              <motion.div
                animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                className="absolute inset-0 rounded-full bg-accent/20"
              />
            </>
          )}
        </motion.button>

        {/* Status Label */}
        <motion.p
          animate={{ opacity: isPlaying ? 1 : 0.6 }}
          className="text-xs text-gray-400 text-center whitespace-nowrap"
        >
          {isPlaying ? '🎵 Playing' : '🔇 Muted'}
        </motion.p>
      </motion.div>

      {/* Optional: Keyboard Shortcut Info */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #00d9ff;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
        }

        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #00d9ff;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
        }
      `}</style>
    </>
  );
}
