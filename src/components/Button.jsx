/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <>
        <button
          css={css`
            background-color: #074ee8;
            color: white;
            border-radius: 4px;
            width: 171px;
            height: 50px;
            margin-right: 30px;
          `}
        >
          Button
        </button>
      </>
    );
  } else if (props.type === "secondary") {
    return (
      <>
        <button
          css={css`
            background-color: #07a4e8;
            color: white;
            border-radius: 4px;
            width: 171px;
            height: 50px;
          `}
        >
          Button
        </button>
      </>
    );
  }
}

export default Button;
