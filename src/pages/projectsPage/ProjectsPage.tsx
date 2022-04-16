import { ExternalLink } from '../../components/externalLink/ExternalLink';
import CVSection from '../../components/cvSection/CVSection';
import { CVPage } from '../../components/cvPage/CVPage';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsPage() {
    return (
        <CVPage label="Projects Page" heading="Projects" headingIcon={faRobot}>
            <CVSection
                label="Autonomous Robot Image Tagging System Project"
                heading="Autonomous Robot Image Tagging System"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Sep. 2014 - Jul. 2015"
            />
            <CVSection
                label="Teach Me Maths Application Project"
                heading="Teach Me Maths Application"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Sep. 2015 - Jul. 2016"
            />
            <CVSection
                label="Bench-Press Sense Project"
                heading="Bench-Press Sense"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Jan. 2017 - Jul. 2017"
            />
            <CVSection
                label="Opportunistic Routing Protocols Project"
                heading="Opportunistic Routing Protocols"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Sep. 2016 - Jan. 2017"
            />
        </CVPage>
    );
}
