import { ExternalLink } from '../../components/externalLink/ExternalLink';
import CVSection from '../../components/cvSection/CVSection';
import { CVPage } from '../../components/cvPage/CVPage';

export function EducationPage() {
    return (
        <CVPage label="Education Page" heading="Education">
            <CVSection
                label="University Of Nottingham Education"
                heading="MSc. With Honours In Computer Science (1st Class)"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Sep. 2013 - Jul. 2017"
            />
            <CVSection
                label="Beaumont Sixth Form Education"
                heading="A Levels In Mathematics, Geography, & IT"
                subHeading={
                    <ExternalLink
                        href="https://beaumontschool.com/sixth-form"
                        name="Beaumont School Sixth Form"
                    />
                }
                time="Sep. 2011 - Aug. 2013"
            />
            <CVSection
                label="Beaumont School Education"
                heading="GCSEs Including Triple Science, Business, & English"
                subHeading={
                    <ExternalLink
                        href="https://beaumontschool.com"
                        name="Beaumont School"
                    />
                }
                time="Sep. 2009 - Aug. 2011"
            />
        </CVPage>
    );
}
