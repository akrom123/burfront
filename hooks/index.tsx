import { useMediaQuery as useMQ } from '@reactuses/core';

export const useMediaQuery = () => {
    const isLG = useMQ('(min-width: 1440px)', false);
    const isMD = useMQ('(max-width: 1439px)', false);
    const isSM = useMQ('(max-width: 1023px)', false);
    const isXS = useMQ('(max-width: 767px)', false);
    const isXXS = useMQ('(max-width: 479px)', false);
    return { isLG, isMD, isSM, isXS, isXXS };
}