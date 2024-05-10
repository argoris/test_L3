import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className={"pC"}>
      <h2>{props.name}</h2>
      <h3 className={'pC-description'}>{props.age}</h3>
      <p>{props.number}</p>
    </div>
  );
};

// function ProductCard({ name, age, number }) {
//   return (
//     <div className={"pC"}>
//       <h2>{name}</h2>
//       <h3>{age}</h3>
//       <p>{number}</p>
//     </div>
//   );
// }

export default ProductCard;
