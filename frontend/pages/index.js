import { product_listing } from "../helpers/Services";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CardSkeleton from "../components/LoaderSkeleton/cardSkeleton";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import ProductCard from "../components/Cards/ProductCard";
import { useAppSelector } from "../../frontend/store/hooks";
import { Search } from "../components/searchInput/search";

export default function Home() {
  const dispatch = useDispatch();
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    productList();
  }, []);

  const products = useAppSelector((state) => state.cart);

  const productList = async () => {
    let res = await product_listing();
    const cartIds = products.map((e) => e.id);
    for (let i = 0; i < res.data.length; i++) {
      if (cartIds.includes(res.data[i].id)) {
        res.data[i].addedToCart = true;
      }
    }

    setProductItem(res.data);
    setisLoading(false);
  };
  const handleDispatch = (item) => {
    dispatch(add(item));
  };

  const handleAdd = (data) => {
    data.addedToCart = true;
    handleDispatch(data);
  };
  return (
    <>
      <Navbar />
      <div className="mt-5 text-center">
        <Search />
      </div>
      <div className="grid grid-cols-4 gap-9 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:flex items-center justify-center flex-wrap max-[500px]:px-8 max-[375px]:px-5">
        {isLoading &&
          Array(8)
            .fill(0)
            .map(() => <CardSkeleton />)}

        {!isLoading &&
          productItem.map((itemData) => (
            <ProductCard
              itemData={itemData}
              type={"product"}
              onClick={handleAdd}
            />
          ))}
      </div>
    </>
  );
}
