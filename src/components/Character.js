import React, { useState, useEffect } from "react";

import Summary from "./Summary";

const Character = props => {
  const [loadedCharacter, setLoadedCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    console.log("Sending Http request for new character with id " + props.selectedChar);
    setIsLoading(true);
    fetch("https://swapi.co/api/people/" + props.selectedChar)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch person!");
        }
        return response.json();
      })
      .then(charData => {
        const loadedCharacter = {
          id: props.selectedChar,
          name: charData.name,
          height: charData.height,
          colors: {
            hair: charData.hair_color,
            skin: charData.skin_color
          },
          gender: charData.gender,
          movieCount: charData.films.length
        };
        setIsLoading(false);
        setLoadedChar(loadedCharacter);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("component did update");
    fetchData();
  }, [props.selectedChar]);

  useEffect(() => {
    fetchData();
    return () => {
      console.log("Too soon...");
    };
  }, []);

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedChar.id) {
    content = (
      <Summary
        name={loadedChar.name}
        gender={loadedChar.gender}
        height={loadedChar.height}
        hairColor={loadedChar.colors.hair}
        skinColor={loadedChar.colors.skin}
        movieCount={loadedChar.movieCount}
      />
    );
  } else if (!isLoading && !loadedChar.id) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

export default Character;
