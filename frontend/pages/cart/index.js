// import Navbar from "../../component/navbar/index";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from "../../store/cartSlice"
// import { useAppSelector } from "@/store/hooks";

import { useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";
import { useAppSelector } from "../../store/hooks";
import Navbar from "../../components/navbar";


export default function Cart() {
  const dispatch = useDispatch()
  const products = useAppSelector(state => state.cart)

  console.log(products, "products");


  const handleRemove = () => {
    dispatch(remove(_id))
  }

  return (
    <div>
      <Navbar />
      <h3>Cart</h3>
      <div>
        {
          products?.map((product) => {
            return (
              <div>
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button onClick={() => handleRemove(product?.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}