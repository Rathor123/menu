import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allcategory = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, SetMenuItem] = useState(items);
  const [category, SetCategories] = useState(allcategory);

  const filterItems = (category) => {
    if (category === "all") {
      SetMenuItem(items);
      return;
    }
    const newitems = items.filter((item) => item.category === category);
    SetMenuItem(newitems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories allcategory={category} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
