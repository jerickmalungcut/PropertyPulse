"use client";
// If you're using the useRouter, useState and other hooks you need to put the use client to prevent the error because the default value was use server

import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={() => router.push("/properties")}
        className=" border border-white py-2 px-4 rounded-full"
      >
        Go home {pathname}
      </button>
    </div>
  );
};

export default PropertyPage;

// The [id] folder will only consider the id folder you cant name it as id. To catch all the routes after the http://localhost:3000/properties/1/hello you need to use [...id] to prevent 404 page error
