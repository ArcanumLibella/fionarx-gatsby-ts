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
      <a href="mailto:hello@fionarx.io" className="flex items-center">
        <AtIcon />
        <Text
          type="custom"
          className="ml-4 font-black tracking-wide font-brother md:text-lg text-tomato"
        >
          hello@fionarx.io
        </Text>
      </a>
    </SecondaryLayout>
  );
};

export default ContactPage;
