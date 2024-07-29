"use client";

import { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";
const listData = ["All", "Action", "Comedy", "Horror", "Drama", "Romance"];
export default function Category() {
  const [selected, setSelected] = useState<string>("All");

  function handleClick(e: React.MouseEvent<HTMLLIElement>) {
    setSelected(e.currentTarget.dataset.textvalue as string);
  }
  return (
    <nav className="flex justify-between items-center px-6">
      <ul className="flex items-center gap-6">
        {listData.map((item) => {
          return (
            <List
              key={item}
              text={item}
              selected={selected}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
      {/* sort */}
      <InputBox />
    </nav>
  );
}
