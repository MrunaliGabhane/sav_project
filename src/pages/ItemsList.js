import React, { useEffect, useState } from "react";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleLoadItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await data.json();
    console.log(response);
    setItems(response);
    setFilteredItems(response);
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
          <div className="bg-white shadow-md rounded-lg p-6">
            {filteredItems.length > 0 ? (
              <ul className="space-y-4">
                {filteredItems.map((item, index) => (
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
    </>
  );
};

export default ItemsList;
