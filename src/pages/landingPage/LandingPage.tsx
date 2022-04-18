import React from 'react';
import './landing-page.css';
import { ExternalLink } from '../../components/externalLink/ExternalLink';

export default function LandingPage() {
    return (
        <header aria-label="Landing Page Header" className="landingPage">
            <h1 className="landingPageHeading">
                I'm <b className="landingPageHeadingAccent">Nicholas Hill</b>, a{' '}
                <b className="landingPageHeadingAccent">
                    Software Developer Consultant
                </b>{' '}
                at{' '}
                <ExternalLink
                    name="Thoughtworks"
                    href="https://www.thoughtworks.com"
                />{' '}
                in <b className="landingPageHeadingAccent">London</b>.
                <br />I graduated with a{' '}
                <b className="landingPageHeadingAccent">
                    Masters degree
                </b> in{' '}
                <b className="landingPageHeadingAccent">Computer Science</b>{' '}
                from the{' '}
                <b className="landingPageHeadingAccent">
                    University of Nottingham
                </b>
                .
                <br />
                I've also worked and studied{' '}
                <b className="landingPageHeadingAccent">
                    Mandarin Chinese
                </b> in <b className="landingPageHeadingAccent">Shenzhen</b> and{' '}
                <b className="landingPageHeadingAccent">Hong Kong</b>.
            </h1>
        </header>
    );
}
