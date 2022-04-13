import { ExternalLink } from '../../components/externalLink/ExternalLink';
import CVSection from '../../components/cvSection/CVSection';
import { CVPage } from '../../components/cvPage/CVPage';

export default function InvolvementsPage() {
    return (
        <CVPage label="Involvements Page" heading="Involvements">
            <CVSection
                label="Guitarist Involvement"
                heading="Guitarist"
                subHeading={
                    <ExternalLink
                        href="https://open.spotify.com/album/42Tfcc1zRcl4bisuqmrzTW?si=U1jiwwyjTWCF7fRFwfhICA"
                        name="The Ages"
                    />
                }
                time="Feb. 2010 - Present"
            />
            <CVSection
                label="Footballer at University Of Nottingham Involvement"
                heading="Footballer"
                subHeading={
                    <ExternalLink
                        href="https://www.nottingham.ac.uk"
                        name="University Of Nottingham"
                    />
                }
                time="Sep. 2013 - Jun. 2016"
            />
            <CVSection
                label="Musician, Sound Engineer, & Producer Involvement"
                heading="Musician, Sound Engineer, & Producer"
                time="Feb. 2010 - Jan. 2016"
                location="Watford"
                subHeading="YouthPoint Studio"
            />
            <CVSection
                label="Footballer At Harvesters FC Involvement"
                heading="Footballer"
                time="Aug. 2006 - Jun. 2016"
                location="St Albans"
                subHeading={
                    <ExternalLink
                        href="https://www.harvestersfc.co.uk"
                        name="Harvesters FC"
                    />
                }
            />
        </CVPage>
    );
}
