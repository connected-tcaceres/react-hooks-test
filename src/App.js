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

  <CharPicker
    side={state.side}
    selectedChar={state.selectedCharacter}
    onCharSelect={charSelectHandler}
  />;
  <Character selectedChar={state.selectedCharacter} />;
  <button onClick={()=>setState({side:'light'})}>Light Side</button>
  <button onClick={()=>setState({side:'dark'})}>Dark Side</button>
  {state.side === 'dark' && (<button onClick={destructionHandler}>DESTROY!</button>)}

  return <div></div>;
};

export default App;
