import React from "react";
import list from "../../../public/list.json";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2x1 mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Lorem ipsum dolor sit amet{" "}
            <span className="text-pink-500">consectetur</span>.
          </h1>

          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            sapiente omnis placeat vero repudiandae, enim consequatur rerum
            illum necessitatibus? Tempore ex sequi, earum sapiente ipsam beatae
            quia repellendus fugit excepturi quisquam rem quis veritatis
            necessitatibus laboriosam tempora aliquam? Excepturi, distinctio!
          </p>

          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800">
            Back
          </button>
          </Link>
        </div>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item)=>(
            <Cards key={item.id} item = {item}/>
          ))
        }
        </div>


      </div>
    </>
  );
}

export default Course;
