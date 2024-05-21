import React from "react";
import { counter} from "../data/home";
import { Link } from "react-router-dom";

function Home() {

    const filteredProducts = counter.filter((counter) =>
      counter.name.toLowerCase()
    );
  
    return (
      <div className="App">
        <h1>Stardew Valley Collections</h1>
  
        <Link to="/Artifacts"><button className="uk-button uk-button-default">Artifacts</button></Link>
        <Link to="/Cooking"><button className="uk-button uk-button-default">Cooking</button></Link>
        <Link to="/Fish"><button className="uk-button uk-button-default">Fish</button></Link>
        <Link to="/Minerals"><button className="uk-button uk-button-default">Minerals</button></Link>
        <Link to="/Items"><button className="uk-button uk-button-default">Items</button></Link>
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