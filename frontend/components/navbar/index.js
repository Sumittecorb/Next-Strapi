import Link from "next/link";
import { useAppSelector } from "../../store/hooks";

export default function Navbar() {
  const items = useAppSelector((state) => state.cart);
  return (
    <>
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-teal-400 py-3 ">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <span className="font-semibold text-xl tracking-tight">
            <Link legacyBehavior href={"/"} >
             
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker cursor-pointer">
                Redux Store
              </a>
            </Link>
          </span>
        </div>
        

        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <span className="font-semibold text-2xl tracking-tight">
            <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest ">
              Welcome to the Redux Store
            </a>
          </span>
        </div>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link legacyBehavior href={"/"} >
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker cursor-pointer">
                Home
              </a>
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link legacyBehavior href={"/cart"}>
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker cursor-pointer">
                {`Cart (${items.length})`}{" "}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
