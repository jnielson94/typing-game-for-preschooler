import React from "react";
import { MatchButton, DescriptionText } from "./styles";

export default function Edit({
  defaultAlphabet,
  alphabet,
  setAlphabet,
  setIsEditing
}) {
  return (
    <div>
      <DescriptionText>
        Enter a comma-seperated set of characters to search for!
      </DescriptionText>
      <textarea
        rows="4"
        cols="26"
        wrap
        value={alphabet}
        onChange={event => {
          const { target } = event;
          setAlphabet(target.value);
        }}
      />
      <div>
        <MatchButton positive onClick={() => setIsEditing(false)}>
          Save
        </MatchButton>
        <MatchButton onClick={() => setAlphabet(defaultAlphabet)}>
          Reset
        </MatchButton>
      </div>
    </div>
  );
}
