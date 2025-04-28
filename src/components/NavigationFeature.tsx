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
    <div className="rounded-lg w-80 h-full border border-gray-800 bg-gray-950 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:brightness-110 cursor-pointer flex flex-col">
      <img
        src={src}
        alt="Navigation Feature"
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 text-center flex-1 flex flex-col justify-center">
        <h4 className="text-[var(--orange)]">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NavigationFeature;
