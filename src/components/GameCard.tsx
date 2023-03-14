import React from "react";
import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import { GameContextType } from "@/context/GameContext";
import Image from "next/image";
import { Game } from "@/context/GameContext";
import Link from "next/link";

type Props = { game: Game };

function GameCard({ game }: Props) {
  const { gameList, setGameList } = useContext(GameContext);
  console.log(game.thumb);
  return (
    // Use flex and flex-col utilities to create a card container
    <div className="flex max-w-sm flex-col overflow-hidden rounded border-2 border-white bg-black shadow-lg">
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
      <div className="flex flex-col items-center gap-2 p-4">
        {/* // Use text-white utility to change the text color */}
        <h3 className="text-md text-white">{game.external}</h3>
        <Link href={`/games/${game.internalName.toLowerCase()}`}>
          <button className="rounded border-2 border-white bg-sky-600 p-1 text-white hover:bg-sky-900">
            See the deals
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
