"use client";
import { useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import Pagination from "../Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchData } from "@/redux/OSSlice";

export default function Cards() {
  const data = useAppSelector((state) => state.OS);
  const dispatch = useAppDispatch();
  const { OSJson, loading, error }: any = data;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-3 content-between m-auto justify-center">
      {OSJson.products?.map((item: any) => {
        return <CardItem {...item} key={item.id} />;
      })}
    </div>
  );
}
