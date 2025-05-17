import { useMediaQuery } from 'react-responsive';

export const useIsSmallDevice = () => {
  return useMediaQuery({
    maxDeviceWidth: 768,
  });
};
