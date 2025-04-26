import { IconType } from "react-icons";

type KeyFeatureProps = {
  icon: IconType;
  title: string;
  description: string[];
};

const KeyFeature = ({ icon: Icon, title, description }: KeyFeatureProps) => {
  return (
    <div className="bg-neutral-900 border border-gray-700 rounded-lg p-8 w-80 transition-all duration-300 hover:border-[var(--orange)] hover:-translate-y-2">
      <div className="flex justify-center mb-4">
        <Icon className="text-[var(--orange)] text-4xl" />
      </div>
      <h4 className="text-[var(--orange)] text-center mb-4">{title}</h4>
      <div className="flex flex-col gap-2">
        {description.map((item) => (
          <p key={item} className="text-gray-300">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default KeyFeature;
