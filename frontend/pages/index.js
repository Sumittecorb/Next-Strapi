import ".";
import { product_listing } from "../helpers/Services";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CardSkeleton from "../components/LoaderSkeleton/cardSkeleton";
import { IMG_BASE_URL } from "../helpers/api_url";
import { useRouter } from "next/router";
import { ProductDetail } from "../components/Routes";

export default function Home() {

  const router = useRouter()
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    productList();
  }, []);

  const productList = async () => {
    let res = await product_listing();
    setProductItem(res.data);
    setisLoading(false)
  };

  const handleDetail = (_id) => {
    router.push(ProductDetail(_id))
  }

  return (
    <>
      <Navbar />
      <div className="mt-5 text-center">
        <h2 className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white xl:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">
          Welcome to the toolkit store
        </h2>
        <h3 className="py-2 pl-3 pr-4 text-gray-900 rounded">Products</h3>
      </div>
      <div className="grid grid-cols-4 gap-9 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:flex items-center justify-center flex-wrap max-[500px]:px-8 max-[375px]:px-5">
        {isLoading ? Array(8).fill(0).map(() => {
          return <CardSkeleton />
        })
          :
          productItem.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="max-w-sm overflow-hidden border-2 marker:border-blue-500 rounded-2xl pt-5 max-[500px]:max-w-xs max-[500px]:min-w-full"
                >
                  <img
                    onClick={() => { handleDetail(data.id) }}
                    className="w-auto h-52 m-auto cursor-pointer"
                    src={`${IMG_BASE_URL}${data.attributes.img.data.attributes.url}`}
                    alt="Product Image"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 truncate text-center">
                      {data.attributes.title}
                    </div>
                    <p className="text-gray-700 text-center text-2xl">
                      {data.attributes.price}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2 flex items-center justify-center">
                    <button
                      // onClick={() => handleAdd(data)}
                      className="bg-emerald-200 rounded-xl text-green-500 px-3 py-2"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  );
}
