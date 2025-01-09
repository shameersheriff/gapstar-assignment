import Card from "./app/shared/card/Card";
import CartItem from "./app/shared/card/components/CartItem";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <Card title={"Social"} jobs={12}>
          <CartItem icon={""} title={"Layers.io"} jobs={12} />
          <CartItem icon={""} title={"Hourglass.app"} jobs={16} />
        </Card>
      </div>
    </>
  );
}

export default App;
