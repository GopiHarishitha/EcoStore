import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  let [search, setSearch] = useState("");
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.products
            .sort((p1, p2) => p2.sustainabilityScore - p1.sustainabilityScore)
            .slice(0, 4)
        );
      })
      .catch((err) => console.log("error in fetching the data", err));
  }, []);

  function handleDetails(itemId) {
    let product = products.find((prod) => prod._id === itemId);
    navigate("/product", { state: product });
  }

  function handleSearch(searchEvent) {
    setSearch(searchEvent.target.value);
  }

  return (
    <div className="app-div">
      <div className="pt-3">
        {search === "" ? (
          <div className="row">
            {
              //iterating through the products array
              products.map((item) => (
                <div
                  key={item._id}
                  className="col-md-6 mb-4 d-grid justify-content-space-around"
                  style={{ minHeight: "50vh" }}
                >
                  <div className="card crd bg-white p-3 Shadow">
                    <img
                      src={item.images}
                      className="card-img w-75 h-25 mx-auto mb-5"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h6>{item.name}</h6>
                    </div>
                    <div
                      className="btn btn-info details mx-auto"
                      onClick={() => handleDetails(item._id)}
                    >
                      Details
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div className="row">
            {products.map(
              (item) =>
                item.title.toLowerCase().includes(search.toLowerCase()) ===
                  true && (
                  <div
                    key={item._id}
                    className="col-md-4 mb-4 d-grid justify-content-space-around"
                    style={{ minHeight: "50vh" }}
                  >
                    <div className="card crd bg-white p-3 shadow">
                      <img
                        src={item.image}
                        className="card-img w-50"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                      </div>
                      <div
                        className="btn details mx-auto"
                        onClick={() => handleDetails(item._id)}
                      >
                        Details
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
