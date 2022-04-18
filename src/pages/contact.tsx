import { AtIcon } from "@/assets/icons";
import { Separator } from "@/components/atoms/Separator";
import { Text } from "@/components/atoms/Text";
import SecondaryLayout from "@/layouts/SecondaryLayout";

const ContactPage = () => {
  return (
    <SecondaryLayout title="Contact" className="overflow-hidden">
      <Text type="title">
        I’m always <strong>available</strong> for new freelance opportunities.
      </Text>
      <Separator />
      <a href="mailto:fionarx.dev@gmail.com" className="flex items-center">
        <AtIcon width={36} />
        <Text
          type="custom"
          className="ml-4 font-black tracking-wide font-brother text-mlg md:text-lg 2xl:text-xlg text-tomato"
        >
          fionarx.dev@gmail.com
        </Text>
      </a>
    </SecondaryLayout>
  );
};

export default ContactPage;
