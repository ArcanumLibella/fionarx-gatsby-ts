import { Text } from '@/components/atoms/Text';
import SecondaryLayout from '@/layouts/SecondaryLayout';
import React from 'react';

const AboutPage = () => {
  return (
    <SecondaryLayout title="About me">
      <Text type="title" className="mb-16">
        My name is Fiona Roux, front-end developer and digital lover based next
        to Paris.
      </Text>
      <Text type="paragraph" className="mb-8">
        What I love most about my job is being able to design and develop
        digital interfaces that correspond exactly to the identity of each of my
        clients.
      </Text>
      <Text type="paragraph">
        Whether it is to bring visibility to a reflexologist through his first
        showcase site, or to create the blog of a plant enthusiast or even to
        create an e-commerce site to allow a young illustrator to sell her
        creations.
      </Text>
    </SecondaryLayout>
  );
};

export default AboutPage;
