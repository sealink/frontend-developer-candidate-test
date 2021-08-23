export const breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const customMediaQuery = (minWidth) => `
  @media (min-width: ${minWidth}px)
`;

export const media = {
  xs: customMediaQuery(breakpoint.xs),
  sm: customMediaQuery(breakpoint.sm),
  md: customMediaQuery(breakpoint.md),
  lg: customMediaQuery(breakpoint.lg),
  xl: customMediaQuery(breakpoint.xl),
  xxl: customMediaQuery(breakpoint.xxl),
};
