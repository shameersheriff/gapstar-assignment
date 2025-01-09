const CardTitle = ({ title, jobs }: { title: string; jobs: number }) => {
  return (
    <div className="flex flex-row justify-between mb-4">
      <div className="text-[16px] font-[600] text-[#18181B] capitalize">{title}</div>
      <div className="text-[16px] font-[600] text-[#64748B]">{jobs}</div>
    </div>
  );
};

export default CardTitle;
