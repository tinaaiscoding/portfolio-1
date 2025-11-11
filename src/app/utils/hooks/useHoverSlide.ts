import { useHover } from './useHover';

export const useHoverSlide = () => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  const slide: Record<string, any> = {
    initial: { width: 0 },
    open: {
      width: 'auto',
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    closed: { width: 0 },
  };

  return { slide, isHovered, onMouseEnter, onMouseLeave };
};
