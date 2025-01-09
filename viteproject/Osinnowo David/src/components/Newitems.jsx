import { useQuery } from "react-query";
import axios from "axios";
import newdeal from "../assests/images/newdeal.jpg";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useShopContext } from "../content.jsx"

function Newitems() {
  const { backendUrl } = useShopContext();

  const { isLoading, data, error } = useQuery("fetchNewdeal", () => {

    return axios.get( `${backendUrl}/api/product/list`);

  });

  if (isLoading) {
    toast("Please Wait", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      draggable: true,
    });
    return null;
  }

  if (error) {
    console.log(error)
    toast("We will be back", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      draggable: true,
    });
    return null;
  }

  return (

    <>
    
      <hr />
      <div className="px-5 py-2 gap-3 text-center pb-1">
        <ul>
          <li className="flex items-center justify-center gap-2">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={newdeal}
              alt="New Deal"
            />
            <div>
              <h1 className="text-lg font-semibold">New Items</h1>
              <p className="text-sm text-gray-500">End Date</p>
            </div>
          </li>
          <li>
            <Link to="/more" className="text-blue-500 underline">
              See More
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-5">
          {data?.data?.products?.map((item) => (
            <div
              key={item.id} // Ensure `item.id` is unique
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="flex justify-center p-4">
                <Link to={`/preview/${item.id}`}>
                
                <img
                  className="w-full h-32 object-contain"
                  src={item.image[0]}
                  alt={item.name || "Product"}
                />
                </Link>
              </div>
              <div className="px-4 py-2">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="flex items-center text-yellow-500">
                  ⭐⭐⭐⭐⭐ <span className="ml-2">{item.rate}%</span>
                </p>
                <p className="text-gray-500 text-xs">Bloomzon Elite</p>
                <p className="text-green-500 text-sm font-bold">Free Delivery</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold">${item.price}</span>
                  <Link
                    to="/addToCart"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-cart4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Newitems;
