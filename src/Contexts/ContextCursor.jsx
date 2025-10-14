import React, { createContext, useState } from "react";

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorHover, setCursorHover] = useState(false);

  const ToggleCursorHover = () => {
    setCursorHover((prevCursorState) =>
      prevCursorState === false ? true : false
    );
  };

  return (
    <CursorContext.Provider value={{ cursorHover, ToggleCursorHover }}>
      {children}
    </CursorContext.Provider>
  );
};

export { CursorContext, CursorProvider };
