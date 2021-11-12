import React from "react";
import { MatchButton, DescriptionText, Presets, PresetButton } from "./styles";
import { presetArray } from "./presets";
export default function Edit({
  defaultAlphabet,
  alphabet,
  setAlphabet,
  setIsEditing
}) {
  return (
    <div>
      <DescriptionText>
        Enter a space-seperated set of characters to work with!
      </DescriptionText>
      <textarea
        rows="4"
        cols="26"
        wrap="hard"
        value={alphabet}
        onChange={(event) => {
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
      <Presets>
        {presetArray.map(({ name, value }) => {
          return (
            <PresetButton key={name} onClick={() => setAlphabet(value)}>
              {name}
            </PresetButton>
          );
        })}
      </Presets>
    </div>
  );
}
