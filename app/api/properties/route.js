// Import the connectDB function from the database configuration module.
import connectDB from "@/config/database";
import Property from "@/models/Property";

// This function handles HTTP GET requests.
//GET /api/properties
export const GET = async (request) => {
  try {
    // Connect to the database before processing the request.
    await connectDB();

    const properties = await Property.find({});

    // Return a new Response object with "Hello World" as the response body.
    // The response body is converted to JSON format using JSON.stringify(),
    // and the status code is set to 200 (OK).
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    // If an error occurs during the execution of the try block, it is caught here.
    // The error is logged to the console for debugging purposes.
    console.log(error);

    // Return a new Response object with "Something went wrong" as the response body
    // and a status code of 500 (Internal Server Error).
    return new Response("Something went wrong", { status: 500 });
  }
};
