import { Text } from '@/components/atoms/Text';
import React from 'react';

type SecondaryLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const SecondaryLayout = ({ children, title }: SecondaryLayoutProps) => {
  return (
    <div className="flex justify-end pt-48 pr-20">
      <div className="max-w-layout">
        <Text type="mainTitle" className="text-tomato mb-10">
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
};

export default SecondaryLayout;
