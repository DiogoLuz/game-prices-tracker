import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import GameSearch from "@/components/GameSearch";
import GameCard from "@/components/GameCard";
import { useContext } from "react";
import { GameContext } from "@/context/GameContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { gameList, setGameList } = useContext(GameContext);
  return (
    <>
      <Head>
        <title>Game Price Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <Navbar />
        <GameSearch />
        <div className="grid grid-cols-4 gap-4">
          {gameList.map((game) => {
            return <GameCard game={game} key={game.internalName} />;
          })}
        </div>
      </main>
    </>
  );
}
