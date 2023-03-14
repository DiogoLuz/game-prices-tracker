import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Props {}

const Game: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { game } = router.query;
  return <div>{game}</div>;
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
