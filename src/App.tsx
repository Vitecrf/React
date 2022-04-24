import React from 'react';
import Life from "./components/Life";
import lifeGame from "./config/lifeGame.json"


function App() {

  return(
      <div>
        <Life dimension={lifeGame.dimension} ticInterval={lifeGame.tic}/>
          {/*<Life dimension={lifeGame.dimension} ticInterval={lifeGame.tic}/>*/}
      </div>
  )
}

export default App;
