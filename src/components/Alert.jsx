// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
    let bgColor = undefined;
    if(props.condition === "error") {
        bgColor = "#F9C8C8";
    }else if (props.condition === "warning") {
        bgColor = "#F9D9C8";
    }else if (props.condition === "info") {
        bgColor = "#FFFFFF";
    }else if (props.condition === "success") {
        bgColor = "#CEF7CF";
    }

    return (
        <div
            css={css`
            margin: 10px;
            display: flex;
            align-item: center;
            justify-content: start;
            padding-left: 20px;
            width: 650px;
            height: 76px;
            font-size: 20px;
            font-weight: 700px;
            color: #000000;
            border-radius: 10px;
            background-color: ${bgColor};
            `}
        >
            <idv
                css={css`
                    margin: 20px;
                    
                `}
            >
                <Alert />   
            </idv>
        
            {props.message}   
        
        </div>
    );
}

export default Alert;
