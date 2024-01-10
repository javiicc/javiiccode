import SpotlightProxCard from "@/components/spotlight/SpotlightProxCard";

const ExperienceMSG = ({ msg }: { msg: string }) => {
  return (
    <SpotlightProxCard className={"custom-card-glows"}>
      <div className="h-[100%] w-[100%] p-4 rounded-xl flex items-center justify-center text-center">
        <p>{msg}</p>
      </div>
    </SpotlightProxCard>
  );
};

export default ExperienceMSG;

// Design and development of backend applications and APIs for
//                   Machine Learning based products.
