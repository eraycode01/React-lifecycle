import Counter from "./components/Counter";
import { useState, useEffect } from 'react';



function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (

    <div className="App">

      {isVisible && <Counter />}

      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>


    </div>


  );
}

export default App;
