import { Separator } from "@/components/atoms/Separator";
import { Text } from "@/components/atoms/Text";
import { CardsService } from "@/components/organisms/CardsService";
import SecondaryLayout from "@/layouts/SecondaryLayout";

export type TechItemType = {
  id: number;
  name: string;
};

const techItems: TechItemType[] = [
  {
    id: 1,
    name: "React.js",
  },
  {
    id: 2,
    name: "Gastby.js",
  },
  {
    id: 3,
    name: "Javascript ES6",
  },
  {
    id: 4,
    name: "TypeScript",
  },
  {
    id: 5,
    name: "Storybook",
  },
  {
    id: 6,
    name: "GraphQL & Apollo",
  },
  {
    id: 7,
    name: "HTML",
  },
  {
    id: 8,
    name: "Sass",
  },
  {
    id: 9,
    name: "TailWindCSS",
  },
  {
    id: 10,
    name: "Styled-component",
  },
  {
    id: 11,
    name: "Responsive & Mobile First",
  },
  {
    id: 12,
    name: "WordPress",
  },
  {
    id: 13,
    name: "Bootstrap",
  },
  {
    id: 14,
    name: "ACF",
  },
  {
    id: 15,
    name: "GravityForm",
  },
  {
    id: 16,
    name: "Timber & TWIG",
  },
  {
    id: 17,
    name: "Github",
  },
  {
    id: 18,
    name: "Figma",
  },
  {
    id: 19,
    name: "Asana",
  },
  {
    id: 20,
    name: "JIRA",
  },
];

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
      <div className="flex gap-8 px-4 mb-12 -mx-4 overflow-x-auto md:px-0 scroll-pr-6 scroll-mr-8 md:mr-0 md:gap-10">
        <CardsService />
      </div>
      <Separator />
      <Text type="subtitle" className="mb-12 md:mb-16">
        Technical stack.
      </Text>
      <Text type="paragraph" className="mb-8">
        For the majority of my creations, I work with the <strong>React</strong>{" "}
        framework coupled with <strong>Gastby.js</strong>, a powerful duo
        renowned for its performance and the large community that supports it.
        For the back office I use <strong>Strapi</strong>, an open-source
        headless CMS known for its flexibility and ease of use.
      </Text>
      <div className="flex-col flex-wrap mb-12 md:mb-16 md:flex md:max-h-40">
        {techItems.map((item) => {
          return (
            <Text key={item.id} type="paragraphLight">
              {item.name}
            </Text>
          );
        })}
      </div>
      <Text type="paragraph" className="font-semibold">
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
