import React from 'react';

export default function (props) {
    return (
        <div className={"rating " + (props.rating > 4.0 ? "positive" : "neutral")}>
            <span className={"star"}>{String.fromCharCode(11089)}</span>
            <span>
                {props.rating} {'Stars'}
            </span>
        </div>
    )
}