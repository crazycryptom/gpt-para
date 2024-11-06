'use client'
import React from "react";

export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* <aside className="h-screen w-[14%] p-4">{leftside}</aside> */}
      <div className="w-full ">
      {children}
      </div>
    </div>
  );
};
