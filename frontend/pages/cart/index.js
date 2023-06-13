import { useAppSelector } from "../../store/hooks";
import Navbar from "../../components/navbar";
import CardSkeleton from "../../components/LoaderSkeleton/cardSkeleton";
import ProductCard from "../../components/Cards/ProductCard";
import { useState } from "react";

export default function Cart() {
  const [isLoading, setisLoading] = useState(false);
  const products = useAppSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <div className="mt-5 text-center"></div>
      <div className="grid grid-cols-4 gap-9 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:flex items-center justify-center flex-wrap max-[500px]:px-8 max-[375px]:px-5">
        {isLoading &&
          Array(8)
            .fill(0)
            .map(() => <CardSkeleton />)}

        {!isLoading &&
          products.map((itemData) => (
            <ProductCard itemData={itemData} type={"cart"} />
          ))}
      </div>
    </>
  )
}
