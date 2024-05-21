import React from "react";
import { counter} from "../data/home";
import { Link } from "react-router-dom";

function Home() {

    const filteredProducts = counter.filter((counter) =>
      counter.name.toLowerCase()
    );
  
    return (
      <div className="App">
        <h1>Collection Information</h1>
  
        <button className="uk-button uk-button-default"><Link to="/Artifacts">Artifacts</Link></button>
        <button className="uk-button uk-button-default"><Link to="/Cooking">Cooking</Link></button>
        <button className="uk-button uk-button-default"><Link to="/Fish">Fish</Link></button>
        <button className="uk-button uk-button-default"><Link to="/Minerals">Minerals</Link></button>
        <button className="uk-button uk-button-default"><Link to="/Items">Items</Link></button>
        <hr className="uk-divider-icon"/>
        <div className="uk-child-width-1-5@s uk-grid">
          {filteredProducts.map((counter) => (
                            <div key={counter.ID}>
                                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                                    <h3 className="uk-card-title">{counter.name}</h3>
                                    <p>Items In Set :{counter.seq}</p>
                                </div>
                            </div>

          ))}

        </div>
        <hr className="uk-divider-icon" />
          
      </div>
    );
}
export default Home;