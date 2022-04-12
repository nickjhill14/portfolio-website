import { Children, ReactNode } from 'react';

interface CVPageProps {
    label: string;
    heading: string;
    children: ReactNode;
}

export function CVPage(props: CVPageProps) {
    const { label, heading, children } = props;

    return (
        <section aria-label={label}>
            <h1>{heading}</h1>
            {children}
        </section>
    );
}
