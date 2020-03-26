import React, { useEffect, useLayoutEffect } from "react";
import Game from "./Game.js";
import Edit from "./Edit.js";
const defaultAlphabet =
  "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9";
const localStorageKey = "preschooler-typing-saved-alphabet";
export default function App() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [alphabet, setAlphabet] = React.useState(defaultAlphabet);
  useLayoutEffect(() => {
    const savedAlphabet = localStorage.getItem(localStorageKey);
    if (savedAlphabet) {
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
          defaultAlphabet={defaultAlphabet}
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
