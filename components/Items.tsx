import React from "react";

type ItemsProps = {
  currentItems: number[];
};

const Items: React.FC<ItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
          </div>
        ))}
    </>
  );
};

export default Items;
