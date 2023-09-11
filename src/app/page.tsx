import Image from "next/image";
import { CardItem } from "@/components/CardItem/CardItem";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <div className="flex flex-wrap gap-3 content-between m-auto justify-center">
        {data.products.map((item: any) => {
          return <CardItem {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
