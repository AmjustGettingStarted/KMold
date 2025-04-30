"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex w-full h-[100vh] items-center justify-center gap-20">
      Page not found
      <Button variant="outline" className="cursor-pointer">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
