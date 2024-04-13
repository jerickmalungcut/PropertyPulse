"use client";
// If you're using the useRouter, useState and other hooks you need to put the use client to prevent the error because the default value was use server

import Link from "next/link";
import { useRouter, useParams, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      Hello World!
    </div>
  );
};

export default page;
