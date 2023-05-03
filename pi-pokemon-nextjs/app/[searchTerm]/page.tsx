import React from "react";
import getPokeResults from "@/lib/getPokeResults";
import Card from "../components/Card";

//for now
type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  const apiData: Promise<Pokemon | undefined> = getPokeResults(searchTerm);
  const data = await apiData;

  if (data) {
    return (
      <Card
        height={data.height}
        id={data.id}
        name={data.name}
        sprites={data.sprites}
        stats={data.stats}
        types={data.types}
        weight={data.weight}
      />
    );
  }
  return undefined;
}
