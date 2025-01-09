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
      <div className="flex flex-row">
        <div className="icon"><img src={icon} /></div>
        <div className="title">{title}</div>
      </div>
      <div className="jobs">{jobs}</div>
    </div>
  );
};

export default CartItem;
