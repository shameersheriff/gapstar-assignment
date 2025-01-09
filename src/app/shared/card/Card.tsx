import { ReactNode } from "react";
import CardTitle from "./components/CardTitle";
import "./Card.css";
import CardHeader from "./components/CardHeader";

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
      className="card-container bg-white w-full"
      style={{ backgroundColor: "white" }}
    >
      <CardTitle title={title} jobs={jobs} />
      <CardHeader />
      {children}
    </div>
  );
};

export default Card;
