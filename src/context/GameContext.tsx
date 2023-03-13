import React, { ReactNode, useState } from "react";
import { createContext } from "react";

export const GameContext = createContext({} as GameContextType);

type Props = { children: ReactNode };

export interface GameContextType {
  gameList: Game[];
  setGameList: React.Dispatch<React.SetStateAction<[]>>;
}

export interface Game {
  gameID: string;
  steamAppID: string | null;
  cheapest: string;
  cheapestDealID: string;
  external: string;
  internalName: string;
  thumb: string;
}

export function AppWrapper({ children }: Props) {
  const [gameList, setGameList] = useState<[]>([]);
  return (
    <GameContext.Provider value={{ gameList, setGameList }}>
      {children}
    </GameContext.Provider>
  );
}
