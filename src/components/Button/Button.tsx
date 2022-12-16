// import './Button.css';
import React from 'react';
export interface NccButtonProps {
    text: string;
}
export default function NccButton(props: NccButtonProps) {
    return (
        <button>{props.text}</button>
    );
}