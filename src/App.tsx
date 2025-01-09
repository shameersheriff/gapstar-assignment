import { useEffect, useState } from "react";
import { getCompanies } from "./app/services/company.service";
import Card from "./app/shared/card/Card";
import CartItem from "./app/shared/card/components/CartItem";

type Industries = { name: string; companies: any[] };

function App() {
  const [cards, setCards] = useState<Industries[] | undefined>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    const data: { items: any[] } = await getCompanies();

    let industries: Industries[] = [];
    industries.push({
      name: data.items[0].industries[0].name,
      companies: [data.items[0]],
    });

    for (let i = 1; i < data.items.length; i++) {
      let item = data.items[i];
      let index = -1;
      for (let x = 0; x < industries.length; x++) {
        if (industries[x].name === item.industries[0].name) {
          index = x;
        }
      }
      if (index === -1) {
        industries.push({
          name: data.items[i].industries[0].name,
          companies: [data.items[i]],
        });
      } else {
        industries[index].companies.push(data.items[i]);
      }
    }
    setCards(industries);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
        {cards &&
          cards.map((item, index) => (
            <div className="w-full flex-1">
              <Card
                key={`card-${index}`}
                title={item.name}
                jobs={item.companies.length}
              >
                {item.companies.map((company, index) => (
                  <CartItem
                    key={`carItem-${index}`}
                    icon={company.images["32x32"]}
                    title={company.name}
                    jobs={company.total_jobs_available}
                  />
                ))}
              </Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
