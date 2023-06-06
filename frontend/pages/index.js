import { product_listing } from "../helpers/Services";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CardSkeleton from "../components/LoaderSkeleton/cardSkeleton";
import { IMG_BASE_URL } from "../helpers/api_url";
import { useRouter } from "next/router";
// import { ProductDetail } from "../components/Routes";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import ProductCard from "../components/Cards/ProductCard";
import { useAppSelector } from "../../frontend/store/hooks";

export default function Home() {
  
  const router = useRouter()
  const dispatch = useDispatch()
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    productList();
  }, []);

  const products = useAppSelector(state => state.cart)

  const productList = async () => {
    let res = await product_listing();
    console.log(res,"res");
    // console.log("pppp", products)
    const cartIds = products.map((e) => e.id);
        console.log("i",cartIds)
        for (let i = 0; i < res.length; i++) {
          if (cartIds.includes(res[i].id)) {
            res.data[i].addedToCart = true;
          }
         }

         
    setProductItem(res.data);
    setisLoading(false);
  };

  console.log(productItem,"productItem");

  const handleDispatch = (add) => {
    dispatch(add_item(add));
  };

  const handleAdd = (data) => {
    console.log("dataa",data)
    data.addedtoCart = true;
    handleDispatch( data);
  };
  

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
          productItem.map((itemData) => <ProductCard itemData={itemData} type={"product"} onClick={handleAdd} />)}
      </div>
    </>
  );
}
