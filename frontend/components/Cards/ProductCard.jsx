import { useRouter } from "next/router";
import { IMG_BASE_URL } from "../../helpers/api_url";
import { useDispatch } from "react-redux";
import { add, remove } from "../../store/cartSlice";
import { useAppSelector } from "../../store/hooks";

const ProductCard = ({ itemData, type, onClick }) => {
  const {
    id,
    addedToCart,
    attributes: { title, price, img },
  } = itemData;
  // const products = useAppSelector((state) => state.cart);
 

  const { push } = useRouter();
  const dispatch = useDispatch();

  const handleRemove = (_id) => {
    dispatch(remove(_id));
  };

  return (
    <div
      key={`demo${id}`}
      className="max-w-sm overflow-hidden border-2 marker:border-blue-500 rounded-2xl pt-5 max-[500px]:max-w-xs max-[500px]:min-w-full"
    >
      <img
        onClick={() => push(`/product/${id}`)}
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
        {type == "product" ? (
          id && addedToCart ? (
            <button
              onClick={() => push("/cart")}
              className="bg-sky-400 rounded-xl text-pink-500 px-3 py-2"
            >
              Goto Cart
            </button>
          ) : (
            <button
              onClick={() => onClick(itemData)}
              className="bg-emerald-200 rounded-xl text-green-900 px-3 py-2"
            >
              Add to cart
            </button>
          )
        ) : (
          <button
            onClick={() => handleRemove(id)}
            className="bg-emerald-200 rounded-xl text-green-500 px-3 py-2"
          >
            Remove Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
