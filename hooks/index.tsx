import { useMediaQuery as useMQ } from '@reactuses/core';

export const useMediaQuery = () => {
    const isLG = useMQ('(min-width: 1440px)');
    const isMD = useMQ('(max-width: 1439px)');
    const isSM = useMQ('(max-width: 1023px)');
    const isXS = useMQ('(max-width: 767px)');
    const isXXS = useMQ('(max-width: 479px)');
    return { isLG, isMD, isSM, isXS, isXXS };
}