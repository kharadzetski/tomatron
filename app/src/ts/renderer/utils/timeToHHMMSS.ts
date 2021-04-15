export const timeToHHMMSS = (duration: number) => {
  return {
    SS: Math.floor((duration / 1000) % 60),
    MM: Math.floor((duration / (1000 * 60)) % 60),
    HH: Math.floor((duration / (1000 * 60 * 60)) % 24),
  };
};
