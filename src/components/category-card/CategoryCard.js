import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ cardData }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        navigate("/video-listing/" + cardData.category);
      }}
    >
      <img src={cardData.thumbnail} alt={cardData.category} />
      <p>{cardData.category}</p>
    </div>
  );
}

export default CategoryCard;
