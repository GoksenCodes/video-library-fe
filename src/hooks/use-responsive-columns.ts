import { useTheme, useMediaQuery } from '@mui/material';

export function useResponsiveColumns(): number {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  return isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;
}
