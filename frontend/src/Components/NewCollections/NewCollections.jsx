import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./NewCollections.css";
const NewCollections = () => {
  const [new_collection, setNew_Collcetion] = useState([]);

  useEffect(() => {
    fetch("https://good-jade-python-boot.cyclic.app/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_Collcetion(data));
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, idx) => {
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
