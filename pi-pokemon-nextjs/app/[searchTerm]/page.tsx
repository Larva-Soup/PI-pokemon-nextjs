import React from "react";
import getPokeResults from "@/lib/getPokeResults";

//for now
type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  const apiData: Promise<Pokemon | undefined> = getPokeResults(searchTerm);
  const data = await apiData;
  return <div>{data?.name || "No such pokemon could be found"}</div>;
}
