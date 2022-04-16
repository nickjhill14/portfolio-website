import { ExternalLink } from '../../components/externalLink/ExternalLink';
import CVSection from '../../components/cvSection/CVSection';
import { CVPage } from '../../components/cvPage/CVPage';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function AchievementsPage() {
    return (
        <CVPage
            label="Achievements Page"
            heading="Achievements"
            headingIcon={faTrophy}
        >
            <CVSection
                label="7Digital/Esendex Prize for Software Quality Achievement"
                heading="7Digital/Esendex Prize for Software Quality"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Jun. 2015"
            />
            <CVSection
                label="C++ Individual Project Hall of Fame Achievement"
                heading="C++ Individual Project Hall of Fame"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Jun. 2015"
            />
            <CVSection
                label="HSK Level 3 Achievement"
                heading="HSK Level 3"
                time="Sep. 2019"
                location="Hong Kong"
                subHeading={
                    <ExternalLink
                        href="http://www.chinesetest.cn"
                        name="Hanban"
                    />
                }
            />
            <CVSection
                label="GA Level 3 Certificate Achievement"
                heading="GA Level 3 Certificate"
                time="Aug. 2017"
                subHeading={
                    <ExternalLink
                        href="https://www.gatehouseawards.org/qualifications/tefl-teaching-english-as-a-foreign-language"
                        name="Gatehouse Awards"
                    />
                }
            />
            <CVSection
                label="AQA Certificate in Microphone Placement Achievement"
                heading="AQA Certificate in Microphone Placement"
                time="Jun. 2014"
                location="Watford"
                subHeading={
                    <ExternalLink href="https://www.aqa.org.uk" name="AQA" />
                }
            />
        </CVPage>
    );
}
