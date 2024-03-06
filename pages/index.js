import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Slider from "@/src/components/Slider/Slider";
import InfoWebSite from "@/src/components/sectionBodyBoxInfo";
import SectionBodyBox from "@/src/components/sectionBodyBoxFirst";
import SectionText from "@/src/components/sectionBodyBoxSecond";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Slider/>
      <InfoWebSite/>
      <SectionBodyBox />
      <SectionText />
    </>
  );
}
