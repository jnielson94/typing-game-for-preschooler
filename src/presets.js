export const lowercaseOnly =
  "a b c d e f g h i j k l m n o p q r s t u v w x y z";
export const uppercaseOnly =
  "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
export const numbersOnly = "0 1 2 3 4 5 6 7 8 9";
export const symbolsOnly = `, < . > / ? ' " ; : [ { } ] \\ | ! @ # $ % ^ & * ( ) - _ = +`;

export const defaultAlphabet = `${lowercaseOnly} ${uppercaseOnly} ${numbersOnly}`;

export const presetArray = [
  { name: "Default (Letters and Numbers)", value: defaultAlphabet },
  {
    name: "Upper and Lower Letters",
    value: `${uppercaseOnly} ${lowercaseOnly}`
  },
  { name: "Lowercase Letters", value: lowercaseOnly },
  { name: "Uppercase Letters", value: uppercaseOnly },
  { name: "Numbers", value: numbersOnly },
  { name: "Symbols", value: symbolsOnly },
  { name: "All characters", value: `${defaultAlphabet} ${symbolsOnly}` }
];
