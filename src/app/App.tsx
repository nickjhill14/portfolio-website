import React from 'react';
import './app.css';

export default function App() {
    return (
        <header aria-label="Landing Page Header">
            <h1>{headingLine1}</h1>
            <h1>{headingLine2}</h1>
            <h1>{headingLine3}</h1>
        </header>
    );
}

export const headingLine1 =
    "I'm Nicholas Hill, a Software Developer Consultant at Thoughtworks in London.";
export const headingLine2 =
    'I graduated with a Masters degree in Computer Science from the University of Nottingham.';
export const headingLine3 =
    "I've also worked and studied Mandarin Chinese in Shenzhen and Hong Kong.";
