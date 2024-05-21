import React, { useState } from "react";
import { Item } from "../data/Items";

function Items() {
  const [filter, setFilter] = useState("");

  const filteredProducts = Item.filter((Item) =>
    Item.Name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="uk-margin-xlarge-left uk-margin-xlarge-right App">
      <h1>Items Collection</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredProducts.map((Item) => (
        <table
          className="uk-table uk-table-striped uk-table-small uk-table-hover uk-table-justify"
          key={Item.ID}
        >
          <thead>
            <tr>
              <th>Item ID : {Item.ID}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Item.Name}</td>
            </tr>
              <img src={`${Item.Picture}`} alt={`${Item.Name}`} />
            <tr>
              <td>{Item.Desc}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
export default Items;
