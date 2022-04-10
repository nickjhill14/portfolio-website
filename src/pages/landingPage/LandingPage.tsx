import React from 'react';
import './landing-page.css';
import { ExternalLink } from '../../components/externalLink/ExternalLink';

export default function LandingPage() {
    return (
        <header aria-label="Landing Page Header" className="landingPage">
            <h1 className="headingLine">
                I'm <b className="headingAccent">Nicholas Hill</b>, a{' '}
                <b className="headingAccent">Software Developer Consultant</b>{' '}
                at{' '}
                <ExternalLink
                    name="Thoughtworks"
                    href="https://www.thoughtworks.com"
                />{' '}
                in <b className="headingAccent">London</b>.
                <br />I graduated with a{' '}
                <b className="headingAccent">Masters degree</b> in{' '}
                <b className="headingAccent">Computer Science</b> from the{' '}
                <b className="headingAccent">University of Nottingham</b>
                .
                <br />
                I've also worked and studied{' '}
                <b className="headingAccent">Mandarin Chinese</b> in{' '}
                <b className="headingAccent">Shenzhen</b> and{' '}
                <b className="headingAccent">Hong Kong</b>.
            </h1>
        </header>
    );
}
