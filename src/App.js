import React from "react";
import {
  DescriptionText,
  SingleLetter,
  MatchButton,
  Font,
  Input,
  FeedbackMessage,
  LettersWrapper
} from "./styles.js";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
const alphabet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const letters = alphabet.split("");

//Visualize: https://xstate.js.org/viz/?gist=9d38210bb18ccd28b516170a3cd8c7b0
const TypingMachine = Machine(
  {
    id: "typing",
    initial: "input",
    context: {
      lastLetter: "",
      target: letters[Math.floor(Math.random() * letters.length)],
      message: "",
      lettersLeft: letters
    },
    states: {
      input: {
        on: {
          LETTER: {
            target: "match",
            actions: ["assignLastLetter"]
          }
        }
      },
      match: {
        on: {
          YES: [
            {
              target: "input",
              cond: "didMatch",
              actions: ["success"]
            },
            {
              target: "match",
              cond: "didNotMatch",
              actions: ["retryMessage"]
            }
          ],
          NO: [
            {
              target: "input",
              cond: "didNotMatch",
              actions: ["tryAgain"]
            },
            {
              target: "match",
              cond: "didMatch",
              actions: ["retryMessage"]
            }
          ]
        }
      }
    }
  },
  {
    actions: {
      assignLastLetter: assign({
        lastLetter: (_, event) => event.letter,
        message: ""
      }),
      retryMessage: assign({
        message: "Not quite. Try again!"
      }),
      tryAgain: assign({
        lastLetter: "",
        message: "Great job! Try to find the right one!"
      }),
      success: assign(context => {
        let message = "Great job! You found the right one!";
        let remainingLetters = [...context.lettersLeft];
        remainingLetters.splice(context.lettersLeft.indexOf(context.target), 1);
        if (remainingLetters.length === 0) {
          //Made it through, reset!
          remainingLetters = alphabet.split("");
          message = "Great job! You made it all the way!";
        }
        return {
          lastLetter: "",
          target:
            remainingLetters[
              Math.floor(Math.random() * remainingLetters.length)
            ],
          message,
          lettersLeft: remainingLetters
        };
      })
    },
    guards: {
      didMatch: context => context.lastLetter === context.target,
      didNotMatch: context => context.lastLetter !== context.target
    }
  }
);

export default function App() {
  const [font, setFont] = React.useState("serif");
  const [state, send] = useMachine(TypingMachine);
  const inputRef = React.useRef();
  const yesRef = React.useRef();
  React.useEffect(() => {
    if (state.matches("input")) {
      // Focus box
      inputRef.current && inputRef.current.focus();
    } else {
      // Focus the yes button
      yesRef.current && yesRef.current.focus();
    }
  }, [state]);
  const { target, lastLetter, message, lettersLeft } = state.context;
  return (
    <div style={{ textAlign: "center" }}>
      <FeedbackMessage message={message}>{message}</FeedbackMessage>
      <DescriptionText>Find:</DescriptionText>
      <SingleLetter positive={true}>{target}</SingleLetter>
      {state.matches("match") ? (
        <>
          <DescriptionText>You typed:</DescriptionText>
          <SingleLetter positive={false}>{lastLetter}</SingleLetter>
          <DescriptionText>Does it match?</DescriptionText>
          <MatchButton ref={yesRef} positive={true} onClick={() => send("YES")}>
            Yes
          </MatchButton>
          <MatchButton positive={false} onClick={() => send("NO")}>
            No
          </MatchButton>
        </>
      ) : (
        <Input
          ref={inputRef}
          value=""
          onChange={event => {
            const letter = event.target.value;
            send({ type: "LETTER", letter });
          }}
        />
      )}
      <div style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
        <label>
          Choose your font:
          <select value={font} onChange={event => setFont(event.target.value)}>
            <option value="serif">Default Serif</option>
            <option value="sans-serif">Default Sans</option>
            <option value="Roboto mono">Roboto Mono</option>
            <option value="Pacifico">Pacifico</option>
            <option value="Permanent marker">Permanent Marker</option>
          </select>
        </label>
        <Font font={font} />
      </div>
      <details>
        <summary>You have {lettersLeft.length} Characters left</summary>
        <LettersWrapper>{lettersLeft.join(" ")}</LettersWrapper>
      </details>
    </div>
  );
}
