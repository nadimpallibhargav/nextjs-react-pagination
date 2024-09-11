"use client";

import React from "react";
import PaginatedItems from "@/components/PaginatedItems"; // Import the PaginatedItems component

const Home = () => {
  return (
    <div>
      <PaginatedItems itemsPerPage={4} />
    </div>
  );
};

export default Home;
