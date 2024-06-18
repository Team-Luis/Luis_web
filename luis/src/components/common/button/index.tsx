import React from "react";
import * as S from "./style";

interface ButtonProps {
  text: string;
  style: React.CSSProperties;
  functions: (() => void) | string;
}

const Button = ({ text, style, functions }: ButtonProps) => {
  return (
    <S.Button
      style={style}
      onClick={() => {
        if (typeof functions === "function") {
          functions();
        }
      }}
    >
      {text}
    </S.Button>
  );
};

export default Button;
