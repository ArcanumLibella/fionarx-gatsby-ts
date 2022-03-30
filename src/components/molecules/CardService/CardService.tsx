import { Text } from "@/components/atoms/Text";

type CardServiceProps = {
  title: string;
  description: string;
};

export const CardService = ({ title, description }: CardServiceProps) => {
  return (
    <div className="flex-1 h-full text-center bg-purple">
      <div className="p-6">
        <Text
          type="custom"
          className="font-bold tracking-tighter font-brother text-md text-tomato"
        >
          {title}
        </Text>
      </div>
      <div className="p-6  bg-tomato">
        <Text type="paragraph">{description}</Text>
      </div>
    </div>
  );
};
