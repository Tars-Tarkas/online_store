import { MouseEventHandler } from "react";
import Image from "next/image";

interface ICardItemProps {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
}

const clickDetails = (id: number) => {};

export default function CardItem(props: ICardItemProps) {
  const { id, title, price, thumbnail } = props;
  return (
    <div
      className="w-80 bg-white rounded-xl p-5 hover:drop-shadow-lg cursor-pointer"
      onClick={() => clickDetails(id)}
    >
      <span className="font-bold block text-center pb-3">{title}</span>
      <div className="w-auto h-64 relative">
        <Image
          quality={80}
          fill
          className="object-cover pb-3"
          src={thumbnail}
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <label className="block text-center pb-3">Price:{price}</label>
      <button className="text-white px-6 py-4 bg-sky-700 rounded-xl block ml-auto">
        Pay
      </button>
    </div>
  );
}
