import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { product_detail } from "../../helpers/Services";
import { useRouter } from "next/router";
import { IMG_BASE_URL } from "../../helpers/api_url";
import CardDetails from "../../components/Cards/detailsCard";
import CardDetailsSkeleton from "../../components/LoaderSkeleton/cardDetailsSkeleton";

const Product = () => {
  const router = useRouter();
  const queryData = router.query.slug;
  const [productData, setProductdata] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (queryData) {
      productDetail();
    }
  }, [queryData]);

  const productDetail = async () => {
    let res = await product_detail(queryData);
    setProductdata(res?.data);
    setisLoading(false);
  };

  return (
    <>
      <Navbar />
      {isLoading && <CardDetailsSkeleton />}

      {!isLoading && <CardDetails productData={productData} />}
    </>
  );
};
export default Product;
