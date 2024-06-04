// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as Icon from "react-feather";

export function ErrorAlert() {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        top: 251px;
        left: 118px;
        gap: 0px;
        opacity: 0px;
        background-color: #f9c8c8;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 20px;
        padding-left: 10px;
        gap: 10px;
        margin-top: 20px;
        border-radius: 5px;
      `}
    >
      <Icon.Frown
        css={css`
          color: red;
        `}
      />
      This is error alert box
    </div>
  );
}

export function WarningAlert() {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        top: 251px;
        left: 118px;
        gap: 0px;
        opacity: 0px;
        background-color: #f9d9c8;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 20px;
        padding-left: 10px;
        gap: 10px;
        margin-top: 20px;
        border-radius: 5px;
      `}
    >
      <Icon.AlertTriangle
        css={css`
          color: coral;
        `}
      />
      This is error alert box
    </div>
  );
}

export function InfoAlert() {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        top: 251px;
        left: 118px;
        gap: 0px;
        opacity: 0px;
        background-color: #f9ebc8;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 20px;
        padding-left: 10px;
        gap: 10px;
        margin-top: 20px;
        border-radius: 5px;
      `}
    >
      <Icon.AlertCircle
        css={css`
          color: orange;
        `}
      />
      This is info alert box
    </div>
  );
}

export function SuccessAlert() {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        top: 251px;
        left: 118px;
        gap: 0px;
        opacity: 0px;
        background-color: #cef7cd;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 20px;
        padding-left: 10px;
        gap: 10px;
        margin-top: 20px;
        border-radius: 5px;
      `}
    >
      <Icon.CheckCircle
        css={css`
          color: green;
        `}
      />
      This is success alert box
    </div>
  );
}
