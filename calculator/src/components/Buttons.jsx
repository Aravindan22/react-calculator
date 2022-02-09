import React from "react";

export default function Buttons() {
    return(
        <div className="buttons">
             <div className="button-row">
                <button>log</button>
                <button>ln</button>
                <button>CLR</button>
            </div>
            <div className="button-row">
                <button>()</button>
                <button>√</button>
                <button>^</button>
                <button>/</button>
            </div>
            <div className="button-row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
            </div>
            <div className="button-row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>
            <div className="button-row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>
            <div className="button-row">
                <button>.</button>
                <button>0</button>
                <button>x</button>
                <button>=</button>
            </div>
        </div>
    )
}