"use client";
type Props = {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
};
import { useState } from "react";
import List from "./List";
const listData = [
  "All",
  "Action",
  "Comedy",
  "Horror",
  "Drama",
  "Romance",
  "Biography",
];
export default function Category({ selected, setSelected }: Props) {
  function handleClick(e: React.MouseEvent<HTMLLIElement>) {
    setSelected(e.currentTarget.dataset.textvalue as string);
  }
  return (
    <nav className="flex justify-between items-center px-6 my-4">
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
    </nav>
  );
}
