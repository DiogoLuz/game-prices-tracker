import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GameContext from "@/context/GameContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameContext.Provider value={[]}>
      <Component {...pageProps} />
    </GameContext.Provider>
  );
}
