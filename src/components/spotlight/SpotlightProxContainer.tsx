import "./SpotlightProx.css";

const SpotlightProxContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={`container-glow ${className}`}>{children}</div>;
};

export default SpotlightProxContainer;
