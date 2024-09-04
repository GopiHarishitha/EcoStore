import { PopupContext } from "./PopupContext";
import React, { useState } from "react";

function Store({ children }) {
  // Use a different name for the state variable
  let [popupContextValue, setPopupContextValue] = useState(false);

  return (
    <PopupContext.Provider value={[popupContextValue, setPopupContextValue]}>
      {children}
    </PopupContext.Provider>
  );
}

export default Store;
