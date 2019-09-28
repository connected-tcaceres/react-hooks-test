import { useState } from "react";
const [isLoading, setIsLoading] = useState(false);
const [fetchedData, setFetchedData] = useState(null);

export const useHttp = () => {
export const useHttp = () => {
  // fetch("https://swapi.co/api/people")
  fetch("https://swapi.co/api/people")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch.");
      }
      return response.json();
    })
    .then(data => {
      // const selectedCharacters = charData.results.slice(0, 5);
      // const charArr = selectedCharacters.map((char, index) => ({
      //   name: char.name,
      //   id: index + 1
      // }));
      // setLoadedChars(charArr);
      // setIsLoading(false);
      setfetchedData(data);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    });
};
