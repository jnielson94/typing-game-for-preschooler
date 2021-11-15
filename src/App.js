import React, { useEffect, useLayoutEffect } from "react";
import Game from "./Game.js";
import Edit from "./Edit.js";
import { defaultAlphabet } from "./presets";
const localStorageKey = "preschooler-typing-saved-alphabet";
export default function App() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [alphabet, setAlphabet] = React.useState(defaultAlphabet);
  useLayoutEffect(() => {
    const savedAlphabet = localStorage.getItem(localStorageKey);
    if (savedAlphabet) {
      if(savedAlphabet.split(" ").length === 1) return;
      setAlphabet(savedAlphabet);
    }
  }, []);
  useEffect(() => {
    if (alphabet) {
      localStorage.setItem(localStorageKey, alphabet);
    }
  }, [alphabet]);
  return (
    <div style={{ textAlign: "center" }}>
      {isEditing ? (
        <Edit
          alphabet={alphabet}
          setAlphabet={setAlphabet}
          setIsEditing={setIsEditing}
        />
      ) : (
        <Game key={alphabet} alphabet={alphabet} setIsEditing={setIsEditing} />
      )}
    </div>
  );
}
