import React from "react";
import * as S from "./style";

interface TextFieldProps {
  id: string;
  name: string;
  type: string;
  value: string;
  children: React.ReactNode;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
  functions: (() => void) | string;
  labelStyle?: React.CSSProperties;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  type,
  value,
  children,
  onchange,
  functions,
  labelStyle,
  placeholder,
}) => {
  return (
    <>
      <S.TextField>
        <label style={labelStyle}>{children}</label>
        <S.TextFieldInput
          required
          id={id}
          name={name}
          onChange={onchange}
          type={type}
          value={value}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (typeof functions === "function") {
                functions();
              } else {
                const elemId = functions;
                document.getElementById(elemId)?.focus();
              }
            }
          }}
        />
      </S.TextField>
    </>
  );
};

export default TextField;
