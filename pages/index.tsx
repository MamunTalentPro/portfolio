import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import DailyStanding from "@/components/DailyStaning"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mamun</title>
        <meta name="description" content="Mamun-dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-green-900 text-white">
        <Navbar />
        <About />
        <DailyStanding />

        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
