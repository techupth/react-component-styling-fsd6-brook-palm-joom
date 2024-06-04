// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function PrimaryButton() {
  return (
    <button
      css={css`
        padding: 25px;
        width: 200px;
        background-color: #074ee8;
        font-size: 24px;
        border-radius: 4px;
        color: white;
        display: flex;
        align-item: center;
        justify-content: center;
        
        }
      `}
    >
      Button
    </button>
  );
}

export function SecondaryButton() {
  return (
    <button
      css={css`
        padding: 25px;
        width: 200px;
        background-color: #07a4e8;
        font-size: 24px;
        border-radius: 4px;
        color: white;
        display: flex;
        margin-top: 20px;
        align-item: center;
        justify-content: center;

        }
      `}
    >
      Button
    </button>
  );
}
