import Image from "next/image";

type NavigationFeatureProps = {
  src: string;
  title: string;
  description: string;
};

const NavigationFeature = ({
  src,
  title,
  description,
}: NavigationFeatureProps) => {
  return (
    <div className="rounded-lg w-80 border border-gray-800 bg-gray-950 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:brightness-110 cursor-pointer">
      <Image
        src={src}
        alt="Navigation Feature"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="p-4">
        <h4 className="text-[var(--orange)]">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NavigationFeature;
