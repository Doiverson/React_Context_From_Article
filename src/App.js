import React, { useState } from 'react';
import ThemeContext from "./Context/ThemeContext";
import Main from "./MainWithClass";
import Header from "./Header";

function App() {
  const themeHook = useState("light");
  return (
      <ThemeContext.Provider value={themeHook}>
          <Header/>
          <Main/>
      </ThemeContext.Provider>
  );
}

export default App;
