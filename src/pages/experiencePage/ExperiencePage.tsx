import { ExternalLink } from '../../components/externalLink/ExternalLink';
import CVSection from '../../components/cvSection/CVSection';

export function ExperiencePage() {
    return (
        <section aria-label="Experience Page">
            <h1>Experience</h1>
            <CVSection
                label="Thoughtworks Experience"
                heading="Consultant Developer"
                subHeading={
                    <ExternalLink
                        href="https://www.thoughtworks.com"
                        name="Thoughtworks"
                    />
                }
                time="Feb. 2020 - Present"
                location="London"
            />
            <CVSection
                label="Teaching Experience"
                heading="English Teacher"
                time="Sep. 2017 - Aug. 2019"
                location="Shenzhen & Hong Kong"
                subHeading="SIK & Cannan Kindergarten"
            />
            <CVSection
                label="Barista & Barman Experience"
                heading="Barista & Barman"
                time="Mar. 2012 - Sep. 2017"
                location="UK"
                subHeading="Hertsmere Leisure & HAP Recruitment"
            />
        </section>
    );
}
