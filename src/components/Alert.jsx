/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as Icon from 'react-feather';


function Alert(props) {
  if (props.typeAlert === "error") {
    return (
      <>
        <button
          css={css`
            background-color: #f9c8c8;
            color: #444444;
            border-radius: 10px;
            width: 650px;
            height: 76px;
            font-weight: 700;
            font-size: 20px;
            text-align: left;
            padding-left: 20px;
            margin-bottom: 30px;
          `}
        ><Icon.Frown />
          This is error alert box
        </button>
      </>
    );
  } else if (props.typeAlert === "warning") {
    return (
      <>
        <button
          css={css`
            background-color: #f9d9c8;
            color: #444444;
            border-radius: 10px;
            width: 650px;
            height: 76px;
            font-weight: 700;
            font-size: 20px;
            text-align: left;
            padding-left: 20px;
            margin-bottom: 30px;
          `}
        ><Icon.AlertTriangle />
          This is warning alert box
        </button>
      </>
    );
  } else if (props.typeAlert === "info") {
    return (
      <>
        <button
          css={css`
            background-color: #f9ebc8;
            color: #444444;
            border-radius: 10px;
            width: 650px;
            height: 76px;
            font-weight: 700;
            font-size: 20px;
            text-align: left;
            padding-left: 20px;
            margin-bottom: 30px;
          `}
        ><Icon.AlertCircle />
          This is info alert box
        </button>
      </>
    );
  } else if (props.typeAlert === "success") {
    return (
      <>
        <button
          css={css`
            background-color: #cef7cd;
            color: #444444;
            border-radius: 10px;
            width: 650px;
            height: 76px;
            font-weight: 700;
            font-size: 20px;
            text-align: left;
            padding-left: 20px;
          `}
        ><Icon.CheckCircle />
          This is success alert box
        </button>
      </>
    );
  }
}

export default Alert;
