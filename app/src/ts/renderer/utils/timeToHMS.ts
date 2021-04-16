type HMS = {
  S: number;
  M: number;
  H: number;
};
export const timeToHMS = (duration: number): HMS => {
  return {
    S: Math.floor((duration / 1000) % 60),
    M: Math.floor((duration / (1000 * 60)) % 60),
    H: Math.floor((duration / (1000 * 60 * 60)) % 24),
  };
};
