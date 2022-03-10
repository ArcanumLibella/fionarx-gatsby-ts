import React from 'react';

import { BaseComponentProps } from '@/types';

export const Title = (props: BaseComponentProps) => {
  const { children } = props;

  return <h1>{children}</h1>;
};
