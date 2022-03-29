import React from 'react';
import './app.css';

export default function App() {
    return (
        <header aria-label="Landing Page Header">
            {headingLines.map((headingLine, index) => (
                <h1 className="headingLine" key={`heading-line-${index}`}>
                    {headingLine}
                </h1>
            ))}
        </header>
    );
}

export const headingLines = [
    "I'm Nicholas Hill, a Software Developer Consultant at Thoughtworks in London.",
    'I graduated with a Masters degree in Computer Science from the University of Nottingham.',
    "I've also worked and studied Mandarin Chinese in Shenzhen and Hong Kong.",
];
