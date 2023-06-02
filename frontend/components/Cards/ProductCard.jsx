import { useRouter } from "next/router";
import { IMG_BASE_URL } from "../../helpers/api_url";

const ProductCard = ({ itemData }) => {
  const {
    id,
    attributes: { title, price, img },
  } = itemData;
  const { push } = useRouter();
  return (
    <div
      key={`demo${id}`}
      className="max-w-sm overflow-hidden border-2 marker:border-blue-500 rounded-2xl pt-5 max-[500px]:max-w-xs max-[500px]:min-w-full"
    >
      <img
        onClick={() => push(`/product/?slug:${id}`)}
        className="w-auto h-52 m-auto cursor-pointer"
        src={`${IMG_BASE_URL}${img.data.attributes.url}`}
        alt="Product Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate text-center">
          {title}
        </div>
        <p className="text-gray-700 text-center text-2xl">{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-center">
        <button className="bg-emerald-200 rounded-xl text-green-500 px-3 py-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
