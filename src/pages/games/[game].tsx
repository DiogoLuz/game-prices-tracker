import Navbar from "@/components/Navbar";
import { GameContext } from "@/context/GameContext";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";

interface Props {}

const Game: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { game } = router.query;
  const { gameList, setGameList } = useContext(GameContext);
  console.log(gameList);
  return (
    <div>
      <Navbar />
      <main>
        <header>
          <h1>{gameList[0].external}</h1>
        </header>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  return {
    props: {},
  };
};

export default Game;
