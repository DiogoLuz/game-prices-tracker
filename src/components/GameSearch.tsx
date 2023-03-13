import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

type Props = {};

type Inputs = {
  gameSearch: string;
};

function GameSearch({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ gameSearch }) => {
    try {
      const searchRequest = await fetch(
        `https://www.cheapshark.com/api/1.0/games?title=${gameSearch}`
      );
      const searchResponse = await searchRequest.json();
      console.log(searchResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="my-3 flex flex-row justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="search"
          {...register("gameSearch")}
          placeholder="Search for a game"
          className="mr-1 w-96 rounded p-0.5"
        />

        <input type="submit" className="rounded bg-slate-400 p-0.5" />
      </form>
    </div>
  );
}

export default GameSearch;
