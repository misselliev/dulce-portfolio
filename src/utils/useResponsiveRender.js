import { useMemo } from 'react';
import useWidthScreen from './useWidthScreen';

export function useResponsiveRender({ small = null, large = null, breakpoint = 768 } = {}) {
  const width = useWidthScreen();

  const renderMobile = useMemo(() => {
    if (breakpoint) {
      return width < breakpoint;
    }
    return false;
  }, [width, breakpoint]);

  const getValueBasedOnScreenSize = () => {
    if (width < breakpoint) {
      return small;
    }
    return large;
  };

  return {
    screenWidth: width,
    renderMobile,
    getValueBasedOnScreenSize,
  };
}
