'use client'

import React, { FC } from 'react'
export const iconsCache: any = {};

interface IProps {
  rotate?: 90 | 180 | 270;
  name: string;
  size?: keyof typeof iconSize | number;
  [key: string]: any; // Additional props for the img element
}

//@ts-ignore
require.context('!svg-react-loader!../../assets/icon', true, /\.svg$/)
  .keys()
  .forEach(async (key: string) => {
    key = key.replace(/^\.\/(.*)\.svg$/, '$1');
    const name = key.replace('/', '-');
    iconsCache[name] = require(`!svg-react-loader!../../assets/icon/${key}.svg`).default;
  });

export const iconSize = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 40,
}

export const Icon: FC<IProps> = ({ name = 'add', size = 24, rotate, ...props }) => {
  const Component = iconsCache[name];
  size = typeof size === 'number' ? size : iconSize[size];
  return (
    <Component width={size} height={size} style={rotate ? {transform: `rotate(${rotate}deg)`} : {}} {...props} />
  )
}
