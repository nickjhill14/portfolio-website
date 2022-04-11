import { ExternalLink } from '../../components/externalLink/ExternalLink';

export function ExperiencePage() {
    return (
        <section aria-label="Experience Page">
            <h1>Experience</h1>
            <article aria-label="Thoughtworks Experience">
                <h2>Consultant Developer</h2>
                <ExternalLink
                    href="https://www.thoughtworks.com"
                    name="Thoughtworks"
                />
                <div aria-label="Time And Location Of Work At Thoughtworks" />
                <ul aria-label="Work At Thoughtworks Summary" />
            </article>
            <article />
            <article />
            <article />
            <article />
            <article />
        </section>
    );
}
