import React from "react";

const Categories = ({ allcategory, filterItems }) => {
  return (
    <div className="btn-container">
      {allcategory.map((val, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(val)}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
