"use client";
import { useAppDispatch, useAppSelector } from "@/app/hook/hooks";
import { increment } from "@/app/store/features/persistStoresSlice";
import { useEffect } from "react";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.persistStores);
  useEffect(() => {
    dispatch(increment(5));
  }, []);

  return <p> persist counter here: {counter}</p>;
};

export default Counter;
