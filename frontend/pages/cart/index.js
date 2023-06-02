// import Navbar from "../../component/navbar/index";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from "../../store/cartSlice"
// import { useAppSelector } from "@/store/hooks";

import { useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";
import { useAppSelector } from "../../store/hooks";
import Navbar from "../../components/navbar";
import CardSkeleton from "../../components/LoaderSkeleton/cardSkeleton";
import ProductCard from "../../components/Cards/ProductCard";
import { useState } from "react";


export default function Cart() {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(false);
  const products = useAppSelector(state => state.cart)

  console.log(products, "products");

  const handleRemove = (_id) => {
    dispatch(remove(_id))
  }

  return (
    <>
      <Navbar />
      <div className="mt-5 text-center">
        <h2 className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white xl:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">
          Welcome to the Redux store
        </h2>
        <h3 className="py-2 pl-3 pr-4 text-gray-900 rounded">Products</h3>
      </div>
      <div className="grid grid-cols-4 gap-9 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:flex items-center justify-center flex-wrap max-[500px]:px-8 max-[375px]:px-5">
        {isLoading &&
          Array(8)
            .fill(0)
            .map(() => <CardSkeleton />)}

        {!isLoading &&
          products.map((itemData) => <ProductCard itemData={itemData} type={"cart"} />)}
      </div>
    </>
  )
}