import React from "react";
import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import { GameContextType } from "@/context/GameContext";
import Image from "next/image";

type Props = {};

function GameCard({}: Props) {
  const { gameList, setGameList } = useContext(GameContext);
  console.log(gameList[0]?.thumb);
  return (
    <div className="h-1/2 w-1/4 rounded border-4 border-white bg-black">
      <div
        className="w-100% relative h-1/2 border-b-4 bg-black"
        id="image-section"
      >
        {gameList[0]?.thumb && (
          <Image
            src={gameList[0]?.thumb}
            alt={gameList[0]?.internalName}
            style={{ objectFit: "cover" }}
            className="h-1/4 w-1/4"
            fill={true}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-md text-white">{gameList[0]?.external}</h3>
        <p className="text-sm text-white">
          Cheapest Price: {gameList[0]?.cheapest}
        </p>
      </div>
    </div>
  );
}

export default GameCard;
