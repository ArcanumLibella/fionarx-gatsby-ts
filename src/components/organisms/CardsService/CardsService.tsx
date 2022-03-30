import { CardService } from "@/components/molecules/CardService/CardService";

export type CardServiceItemType = {
  title: string;
  description: string;
};

const cardServiceItems: CardServiceItemType[] = [
  {
    title: "Showcase site",
    description:
      "A showcase site allows you to present your activity, your creations, your products, your skills..",
  },
  {
    title: "Specific site",
    description:
      "Tailor-made development at the request of the client. Contact me for more information.",
  },
  {
    title: "E-commerce",
    description: "Custom creation of your online store.",
  },
];

export const CardsService = () => {
  return (
    <>
      {cardServiceItems.map((item) => {
        return (
          <CardService
            key={item.title}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </>
  );
};
