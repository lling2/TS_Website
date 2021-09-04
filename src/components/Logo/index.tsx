import React, { FC, memo } from 'react';
import { 
    Box, 
    BoxProps 
} from '@material-ui/core';

export type LogoProps = BoxProps & {
  height?: number;
  src: string;
  alt?: string;
  title?: string;
};
const Logo: FC<LogoProps> = ({
  height = 40,
  src,
  alt = 'logo',
  title = 'logo',
  ...props
}: LogoProps) => (
  <Box component="span" height={height} {...props}>
    <img
      alt={alt}
      style={{
        height: '100%',
      }}
      title={title}
      src={src}
    />
  </Box>
);

export default memo(Logo);