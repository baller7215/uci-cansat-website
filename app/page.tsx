import CoverPage from "@/components/shared/CoverPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <CoverPage page="home" title="Design. Build. Launch. Compete." subtitle="Elevate Your Engineering Skills" background="./assets/images/home-cover.jpg" />
      </main>
    </>
  );
}
