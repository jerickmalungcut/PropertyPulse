import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
};

export default page;
