import React from "react";
import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import { GameContextType } from "@/context/GameContext";
import Image from "next/image";
import { Game } from "@/context/GameContext";

type Props = { game: Game };

function GameCard({ game }: Props) {
  const { gameList, setGameList } = useContext(GameContext);
  console.log(game.thumb);
  return (
    // Use flex and flex-col utilities to create a card container
    <div className="flex max-w-sm flex-col overflow-hidden rounded bg-black shadow-lg">
      {/* // Use relative and h-48 utilities to create an image section */}
      <div className="relative h-48" id="image-section">
        {/* // Use absolute and inset-0 utilities to position the image */}
        {game.thumb && (
          <Image
            src={game.thumb}
            alt={game.internalName}
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
            fill={true}
          />
        )}
      </div>
      {/* // Use p-4 utility to add padding to the content section */}
      <div className="p-4">
        {/* // Use text-white utility to change the text color */}
        <h3 className="text-md text-white">{game.external}</h3>
        <p className="text-sm text-white">Cheapest Price: {game.cheapest}</p>
      </div>
    </div>
  );
}

export default GameCard;
