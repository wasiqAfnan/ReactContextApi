import React from "react";
import itemData from "../assets/items.json";
import ItemList from "./itemList";

function Item() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // <--- Add this line
          gap: "1rem",
          justifyContent: "center",
          padding: "1rem", // Added some padding for better visual spacing from edges
        }}
      >
        {itemData.map((item) => (
          <ItemList item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Item;
