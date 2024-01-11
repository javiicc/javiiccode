import SpotlightProxCard from "@/components/spotlight/SpotlightProxCard";

const ExperienceMSG = ({
  msg,
  className,
}: {
  msg: string;
  className: string;
}) => {
  return (
    <SpotlightProxCard className={`custom-card-glows ${className}`}>
      <div className="h-[100%] w-[100%] p-4 rounded-xl flex items-center justify-center text-center">
        <p>{msg}</p>
      </div>
    </SpotlightProxCard>
  );
};

export default ExperienceMSG;
