"use client";
// If you're using the useRouter, useState and other hooks you need to put the use client to prevent the error because the default value was use server

import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/request";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      Property Page
    </div>
  );
};

export default PropertyPage;

// The [id] folder will only consider the id folder you cant name it as id. To catch all the routes after the http://localhost:3000/properties/1/hello you need to use [...id] to prevent 404 page error
