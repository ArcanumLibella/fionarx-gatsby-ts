import { Separator } from "@/components/atoms/Separator";
import { Text } from "@/components/atoms/Text";
import { StackItems } from "@/components/molecules/StackItems";
import { CardsService } from "@/components/organisms/CardsService";
import SecondaryLayout from "@/layouts/SecondaryLayout";

const AboutPage = () => {
  return (
    <SecondaryLayout title="About me" className="overflow-y-auto xl:pb-48">
      <Text type="title">
        My name is <strong>Fiona Roux</strong>, front-end developer and digital
        lover based next to Paris.
      </Text>
      <Separator />
      <Text type="paragraph" className="mb-8">
        What I love most about my job is being able to design and develop
        digital interfaces that correspond exactly to the identity of each of my
        clients.
      </Text>
      <Text type="paragraph" className="mb-8">
        Whether it is to bring visibility to a reflexologist through his first
        showcase site, or to create the blog of a plant enthusiast or even to
        create an e-commerce site to allow a young illustrator to sell her
        creations.
      </Text>
      <Text type="paragraph" className="mb-8">
        I like to support my clients from A to Z in their project, from the
        choice of their graphic identity to putting it online.
      </Text>
      <Separator />
      <Text type="subtitle" className="mb-12 md:mb-16">
        Services.
      </Text>
      <div className="flex gap-8 px-4 mb-12 -mx-4 overflow-x-auto lg:overflow-hidden md:px-8 md:-mx-8 xl:px-0 xl:mx-0 xl:gap-10">
        <CardsService />
      </div>
      <Separator />
      <Text type="subtitle" className="mb-12 md:mb-16">
        Technical stack.
      </Text>
      <Text type="paragraph" className="mb-8 lg:mb-12">
        For the majority of my creations, I work with the <strong>React</strong>{" "}
        framework coupled with <strong>Gastby.js</strong>, a powerful duo
        renowned for its performance and the large community that supports it.
        For the back office I use <strong>Strapi</strong>, an open-source
        headless CMS known for its flexibility and ease of use.
      </Text>
      <div className="flex flex-wrap gap-12 mb-12 md:mb-16">
        <StackItems type="modernStack" />
        <StackItems type="wordPressStack" />
        <StackItems type="styleStack" />
        <StackItems type="practicesStack" />
        <StackItems type="toolsStack" />
      </div>
      <Text type="paragraph" className="text-base font-semibold">
        Agency? Recruiting firm ? Start-up? You can see my resume right{" "}
        <a
          href="https://www.figma.com/file/MMTQegNDNAyHUlx4dglEAE1U/CV?node-id=1422%3A4"
          target="_blank"
          rel="noreferrer"
          className="text-tomato"
        >
          here
        </a>
        .
      </Text>
    </SecondaryLayout>
  );
};

export default AboutPage;
