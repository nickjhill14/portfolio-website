import { ReactNode } from 'react';
import './cv-page.css';

interface CVPageProps {
    label: string;
    heading: string;
    children: ReactNode;
}

export function CVPage(props: CVPageProps) {
    const { label, heading, children } = props;

    return (
        <section className="cvPage" aria-label={label}>
            <h1 className="cvHeading">{heading}</h1>
            {children}
        </section>
    );
}
