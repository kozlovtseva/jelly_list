const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
    xs: customMediaQuery(480),
    sm: customMediaQuery(576),
    md: customMediaQuery(768),
    lg: customMediaQuery(992),
    xl: customMediaQuery(1200),
    xxl: customMediaQuery(1600),
};
