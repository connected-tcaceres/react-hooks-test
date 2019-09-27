import React, { useState } from "react";

const App = props => {
  const [state, setState] = useState({ selectedCharacter: 1, side: "light", destroyed: false });

  const sideHandler = side => {
    setState({ side });
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setState({ selectedCharacter: charId });
  };

  const destructionHandler = () => {
    setState({ destroyed: true });
  };
  return <div></div>;
};

export default App;
