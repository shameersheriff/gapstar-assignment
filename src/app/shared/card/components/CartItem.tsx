const CartItem = ({
  icon,
  title,
  jobs,
}: {
  icon: string;
  title: string;
  jobs: number;
}) => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row items-center gap-[8px]">
        <div className="h-[24px] w-[24px] rounded-[2px]">
          <img src={icon} />
        </div>
        <div className="text-[14px] font-[400]">{title}</div>
      </div>
      <div className="text-[14px] font-[400] text-[#64748B]">{jobs}</div>
    </div>
  );
};

export default CartItem;
