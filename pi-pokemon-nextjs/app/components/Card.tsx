import React from "react";

function Card(props: Pokemon) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="bg-slate-400">
        {props.name || "No such pokemon could be found"}
      </h2>
      <img src={props.sprites} alt={props.name} />
      <div className="flex justify-evenly bg-red-500">
        <span className="px-2 bg-blue-300">{props.types[0]}</span>
        <span className="px-2 bg-green-400">{props?.types[1]}</span>
      </div>
    </div>
  );
}

export default Card;
