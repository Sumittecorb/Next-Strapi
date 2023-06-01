import "."
import { listing_postType, listing_resource } from '../helpers/Services';
import { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import CardSkeleton from "../components/LoaderSkeleton/cardSkeleton"


export default function Home() {

//   const handleFav = async () => {
//     let data ={
//       data:"mohit"
//     };
//     let response = await listing_postType(data);
//   console.log("post_response",response)
// };

const [productItem,setProductItem] = useState([])

const handleData =async()=>{
  let res = await listing_resource();
  setProductItem(res);
  console.log("get_response",res)
}
useEffect(()=>
{
  handleData()
},[])
  return (
    <>
    
      <Navbar />
      <div className="mt-5 text-center">
        <h2 className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white xl:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">Welcome to the toolkit store</h2>
        <h3 className="py-2 pl-3 pr-4 text-gray-900 rounded">Products</h3>
      </div>
      <div className="grid grid-cols-4 gap-9 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:flex items-center justify-center flex-wrap max-[500px]:px-8 max-[375px]:px-5">
      {
        productItem && productItem.length &&
         productItem?.map((data)=>{
      return  (
        <>
        <div  className="max-w-sm overflow-hidden border-2 marker:border-blue-500 rounded-2xl pt-5 max-[500px]:max-w-xs max-[500px]:min-w-full">
                <img className="w-auto h-52 m-auto" src={data.image} alt="Product Image" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 truncate text-center">{data.title}</div>
                  <p className="text-gray-700 text-center text-2xl">
                    {data.price}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex items-center justify-center">
                  <button onClick={() => handleAdd(data)} className="bg-emerald-200 rounded-xl text-green-500 px-3 py-2">
                    Add to cart
                  </button>
                </div>
                </div>
                <CardSkeleton />
          </>
        )
      })
      }


       {/* <p>
          hii click on me!!
        <button onClick={handleFav}>clickme</button>
        </p> */}
       
        
        </div>
    </>
  )
}
