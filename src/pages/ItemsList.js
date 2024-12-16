import React, { useEffect, useState } from "react";
import { SearchBox } from "../components/SearchBox";
import Pagination from "../components/Pagination";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / limit);

  const handleLoadItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    console.log(response);
    setItems(response);
    setFilteredItems(response);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const lowerCaseTerm = term.toLowerCase();

    const filtered = items.filter(
      (item) => item.title && item.title.toLowerCase().includes(lowerCaseTerm)
    );

    setFilteredItems(filtered);
    setCurrentPage(1);
  };

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    return filteredItems.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleLoadItems();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-5">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Item Section
          </h1>
          <div className="w-full max-w-2xl">
            <SearchBox handleSearch={handleSearch} searchTerm={searchTerm} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            {getPaginatedItems().length > 0 ? (
              <ul className="space-y-4">
                {getPaginatedItems().map((item, index) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:shadow-lg cursor-grab hover:bg-red-300">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-700">
                        {item.id} : {item.title}
                      </h2>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">No items found</p>
            )}
          </div>
        </div>
      </div>
      <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      />
    </>
  );
};

export default ItemsList;
