import { ReactNode } from "react";
import CardTitle from "./components/CardTitle";
import CompanyInfo from "./components/CompanyInfo";

const Card = ({
  children,
  title,
  jobs,
}: {
  children: ReactNode;
  title: string;
  jobs: number;
}) => {
  return (
    <div
      className="p-[16px] rounded-[8px] bg-white w-full h-full"
      style={{ backgroundColor: "white" }}
    >
      <CardTitle title={title} jobs={jobs} />
      <CompanyInfo />
      <div className="flex flex-col gap-[16px]">{children}</div>
    </div>
  );
};

export default Card;
