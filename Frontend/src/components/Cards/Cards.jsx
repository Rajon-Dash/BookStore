import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="m-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
          <figure>
            <img 
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-pink-300 hover:text-white px-2 py-1 duration-400">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
