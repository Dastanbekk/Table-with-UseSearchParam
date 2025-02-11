import { useEffect, useState } from "react";

const All = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [page, limit]);

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  return (
    <div>
      <div className="px-4 bg-white mt-5 py-5 h-[72vh] overflow-y-scroll ">
        <h3 className="font-bold text-xl">All Products</h3>
        <p className="text-gray-400 text-[14px] font-bolder">
          Manage your products and view their sales performance.
        </p>

        <table className="w-full mt-5 ">
          <thead className="w-full border-b-2  border-gray-300 text-gray-300">
            <tr className="w-full">
              <th className="w-[30%]">Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Total Sales</th>
              <th>Created at</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full ">
            {data.map((value) => (
              <tr key={value.id} className="w-full  border-b border-gray-300">
                <th className="w-full flex items-center gap-10  py-3">
                  {" "}
                  <img
                    className="w-[60px] h-[60px] rounded-xl"
                    src={value.img}
                    alt=""
                  />{" "}
                  {value.name}{" "}
                </th>
                <th className="">{value.status}</th>
                <th className="">${value.price}</th>
                <th className="">{value.total_sales}</th>
                <th className="">{value.date}</th>
                <th>
                  <button className=" cursor-pointer">...</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center px-5 mt-4">
        <h3 className="text-[14px]">
          Showing <span className="font-bold">6-10</span> of{" "}
          <span className="font-bold">10</span> products
        </h3>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2"
            onClick={() => handleLimitChange(10)}
          >
            <i className="bx bxs-chevron-left"></i>Prev
          </button>
          |
          <button
            className="flex items-center gap-2"
            onClick={() => handleLimitChange(20)}
          >
            Next <i className="bx bxs-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default All;
