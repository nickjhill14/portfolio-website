import React from 'react';
import './app.css';

export default function App() {
    return (
        <header aria-label="Landing Page Header">
            <h1 className="headingLine">
                I'm <b>Nicholas Hill</b>, a <b>Software Developer Consultant</b>{' '}
                at{' '}
                <a href="https://www.thoughtworks.com" target="_blank">
                    Thoughtworks
                </a>{' '}
                in <b>London</b>.
                <br />I graduated with a <b>Masters degree</b> in{' '}
                <b>Computer Science</b> from the <b>University of Nottingham</b>
                .
                <br />
                I've also worked and studied <b>Mandarin Chinese</b> in{' '}
                <b>Shenzhen</b> and <b>Hong Kong</b>.
            </h1>
        </header>
    );
}
