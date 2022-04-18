import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './cv-page.css';

interface CVPageProps {
    label: string;
    headingIcon: IconDefinition;
    heading: string;
    children: ReactNode;
}

export function CVPage(props: CVPageProps) {
    const { label, heading, headingIcon, children } = props;

    return (
        <section className="cvPage" aria-label={label}>
            <header className="cvPageHeader">
                <FontAwesomeIcon
                    icon={headingIcon}
                    className="cvPageHeadingIcon"
                />
                <h1 className="cvPageHeading">{heading}</h1>
            </header>
            {children}
        </section>
    );
}
