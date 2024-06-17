import About from "@/components/About";
import { SecondaryHeading, PrimaryHeading } from "@/components/Heading";
import CategoryBox from "@/components/Categories/CategoryBox"
import MostPopularFood from "./MostPopularFood";
import Subscribe from "@/components/Subscribe/Subscribe"
import Contact from "@/components/Contact/Contact"

export default function Home() {
  return (
    <main>
      <PrimaryHeading>Home</PrimaryHeading>

      <SecondaryHeading >Categories</SecondaryHeading>
     
      <CategoryBox/>
      <About/>
      <MostPopularFood/>
      <Subscribe/>
      <Contact/>
    </main>
  );
}
