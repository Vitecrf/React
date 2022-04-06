import React from 'react';

import './App.css';
import Timer from './components/Timer';

function App() {
  return(
      <div className='block'>
          <Timer interval={1000} locales={"en-US"}/>
        <Timer interval={1000} locales={"en-GB"}/>
        <Timer interval={1000} locales={"en-KR"}/>
        <Timer interval={1000} locales={"en-EG"}/>
      </div>
  )
}

export default App;
