import React from "react";
import getPokeResults from "@/lib/getPokeResults";

//for now
type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  const apiData: Promise<SearchResult> = getPokeResults(searchTerm);
  const data = await apiData;
  const results: Pokemon[] | undefined = data?.query?.pages;
  return <div>page</div>;
}
