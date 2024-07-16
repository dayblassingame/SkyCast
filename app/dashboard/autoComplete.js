import React from "react";

export default function AutoComplete({ list, setCity }) {
  return (
    <div>
      {list.map((item, index) => (
        <button key={index} id={item.id} onClick={setCity}>
          `{item.name}, {item.region}, {item.country} `
        </button>
      ))}
    </div>
  );
}
