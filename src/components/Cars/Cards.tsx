"use client";
import { useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import Pagination from "../Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/actioin/actionCreator";

export default function Cards() {
  const data = useAppSelector((state) => state.OSReducer.OSJson);
  const dispatch = useAppDispatch();
  const { products, loading, error }: any = data;
  console.log(data);

  useEffect(() => {
    dispatch(getProducts(10));
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-3 content-between m-auto justify-center">
      {products?.map((item: any) => {
        return <CardItem {...item} key={item.id} />;
      })}
    </div>
  );
}
