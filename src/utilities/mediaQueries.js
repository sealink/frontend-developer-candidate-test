export const breakpoint = {
  small: 480, // or 576
  medium: 768,
  large: 992,
  extraLarge: 1200,
};

export const customMediaQuery = (minWidth) => `
  @media (min-width: ${minWidth}px)
`;

export const media = {
  sm: customMediaQuery(breakpoint.small),
  md: customMediaQuery(breakpoint.medium),
  lg: customMediaQuery(breakpoint.large),
  xl: customMediaQuery(breakpoint.extraLarge),
};
