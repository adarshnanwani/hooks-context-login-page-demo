import { useState } from "react";

export default (initialvalue = false) => {
  const [state, setState] = useState(initialvalue);

  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
};
