import Card from "./app/shared/card/Card";
import CartItem from "./app/shared/card/components/CartItem";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <Card title={"Social"} jobs={12}>
          <CartItem
            icon={
              "https://storage.googleapis.com/dealroom-images-development/e0/MzI6MzI6Y29tcGFueUBzMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9kZWFscm9vbS1pbWFnZXMvMjAyNC8wNC8zMC9iOGY3YjhlZjQ3M2E0NDlhZjI1OTQ0NDc1ZTgxZmE3Mw==.png"
            }
            title={"Layers.io"}
            jobs={12}
          />
          <CartItem icon={""} title={"Hourglass.app"} jobs={16} />
        </Card>
      </div>
    </>
  );
}

export default App;
