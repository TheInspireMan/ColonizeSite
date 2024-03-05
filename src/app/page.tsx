import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Laptop from "@/components/Laptop";
import GameTabs from "@/components/GameTabs";
import About from "@/components/About";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Laptop />
    <GameTabs />
    <hr/>
    <About />
    </>
  );
}
