const CardTitle = ({ title, jobs }: { title: string; jobs: number }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="">{title}</div>
      <div className="">{jobs}</div>
    </div>
  );
};

export default CardTitle;
