"use client";
import { useEffect } from "react";
import CardItem from "../../components/CardItem/CardItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProduct } from "@/redux/OSSlice";

export default function Cards() {
  const data = useAppSelector((state) => state.OS);
  const dispatch = useAppDispatch();
  const { products, loading, error, total }: any = data;

  useEffect(() => {
    dispatch(fetchProduct(10));
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-3 content-between m-auto justify-center">
      {products?.map((item: any) => {
        return <CardItem {...item} key={item.id} />;
      })}
    </div>
  );
}
