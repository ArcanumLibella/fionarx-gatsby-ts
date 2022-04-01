import { Text } from "@/components/atoms/Text";

type TechItemType = {
  id: number;
  name: string;
};

type StackItemsProps = {
  type:
    | "modernStack"
    | "wordPressStack"
    | "styleStack"
    | "practicesStack"
    | "toolsStack";
};

export const StackItems = ({ type }: StackItemsProps) => {
  const modernStackItems: TechItemType[] = [
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
      name: "Next.js",
    },
    {
      id: 4,
      name: "Javascript ES6",
    },
    {
      id: 5,
      name: "TypeScript",
    },
    {
      id: 6,
      name: "Storybook",
    },
    {
      id: 7,
      name: "GraphQL & Apollo",
    },
    {
      id: 8,
      name: "Strapi",
    },
  ];

  const wordPressStackItems: TechItemType[] = [
    {
      id: 1,
      name: "WordPress",
    },
    {
      id: 2,
      name: "Bootstrap",
    },
    {
      id: 3,
      name: "ACF",
    },
    {
      id: 4,
      name: "GravityForm",
    },
    {
      id: 5,
      name: "TWIG",
    },
    {
      id: 6,
      name: "Timber",
    },
  ];

  const styleStackItems: TechItemType[] = [
    {
      id: 1,
      name: "TailWindCSS",
    },
    {
      id: 2,
      name: "Styled-component",
    },
    {
      id: 3,
      name: "Chakra UI",
    },
    {
      id: 4,
      name: "Sass",
    },
  ];

  const practicesStackItems: TechItemType[] = [
    {
      id: 1,
      name: "Atomic Design",
    },
    {
      id: 2,
      name: "BEM",
    },
    {
      id: 3,
      name: "Responsive & Mobile First",
    },
    {
      id: 4,
      name: "Accessibility",
    },
  ];

  const toolsStackItems: TechItemType[] = [
    {
      id: 1,
      name: "Github",
    },
    {
      id: 2,
      name: "Figma",
    },
    {
      id: 3,
      name: "Asana",
    },
    {
      id: 4,
      name: "JIRA",
    },
  ];

  const renderStackTitleItems = () => {
    switch (type) {
      case "modernStack":
        return "Modern Stack";
      case "wordPressStack":
        return "WordPress Stack";
      case "styleStack":
        return "Style";
      case "practicesStack":
        return "Goods Practices";
      case "toolsStack":
        return "Tools";
      default:
        return null;
    }
  };

  const renderStackItems = () => {
    switch (type) {
      case "modernStack":
        return modernStackItems.map((item) => {
          return (
            <Text key={item.id} type="paragraphLight">
              {item.name}
            </Text>
          );
        });
      case "wordPressStack":
        return wordPressStackItems.map((item) => {
          return (
            <Text key={item.id} type="paragraphLight">
              {item.name}
            </Text>
          );
        });
      case "styleStack":
        return styleStackItems.map((item) => {
          return (
            <Text key={item.id} type="paragraphLight">
              {item.name}
            </Text>
          );
        });
      case "practicesStack":
        return practicesStackItems.map((item) => {
          return (
            <Text key={item.id} type="paragraphLight">
              {item.name}
            </Text>
          );
        });
      case "toolsStack":
        return toolsStackItems.map((item) => {
          return (
            <Text key={item.id} type="paragraphLight">
              {item.name}
            </Text>
          );
        });
      default:
        return null;
    }
  };

  return (
    <div className="">
      <Text
        type="custom"
        className="mb-4 text-base font-bold uppercase font-body text-purple-light lg:text-xbase"
      >
        {renderStackTitleItems()}
      </Text>
      {renderStackItems()}
    </div>
  );
};
