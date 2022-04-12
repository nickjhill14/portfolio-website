import { ExternalLink } from '../../components/externalLink/ExternalLink';
import cvPDF from '../../assets/docs/nicholas-hill-cv.pdf';
import './contact-page.css';
import { CVPage } from '../../components/cvPage/CVPage';

export function ContactPage() {
    return (
        <CVPage label="Contact Page" heading="Contact">
            <article className="contactPageLinks" aria-label="Contact Links">
                <ExternalLink
                    href="mailto:nicholasjhill@live.co.uk"
                    name="Email"
                />
                <ExternalLink
                    href="https://www.linkedin.com/in/nicholas-j-hill"
                    name="LinkedIn"
                />
                <ExternalLink
                    href="https://github.com/nickjhill14"
                    name="GitHub"
                />
                <ExternalLink
                    href="https://twitter.com/NicholasJHill14"
                    name="Twitter"
                />
                <ExternalLink
                    href="https://open.spotify.com/album/42Tfcc1zRcl4bisuqmrzTW?si=SIqzqFprTgmT9nvc7i8wAQ&nd=1"
                    name="Spotify"
                />
                <ExternalLink href={cvPDF} name="CV" />
            </article>
        </CVPage>
    );
}
