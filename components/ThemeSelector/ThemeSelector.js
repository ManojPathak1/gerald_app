import React, { useState } from "react";

const ThemeSelector = ({ onChange }) => {
  const [isLightTheme, setLightTheme] = useState(true);
  const onChangeTheme = () => {
    onChange(!isLightTheme);
    setLightTheme(!isLightTheme);
  };
  return <div onClick={onChangeTheme}>{isLightTheme ? 'Set Dark' : 'Set Light'}</div>
};

export default ThemeSelector;