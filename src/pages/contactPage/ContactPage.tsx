import { ExternalLink } from '../../components/externalLink/ExternalLink';

export function ContactPage() {
    return (
        <>
            <h1>Contact</h1>
            <ExternalLink href="mailto:nicholasjhill@live.co.uk" name="Email" />
            <ExternalLink
                href="https://www.linkedin.com/in/nicholas-j-hill"
                name="LinkedIn"
            />
            <ExternalLink href="https://github.com/nickjhill14" name="GitHub" />
            <ExternalLink
                href="https://twitter.com/NicholasJHill14"
                name="Twitter"
            />
            <ExternalLink
                href="https://open.spotify.com/album/42Tfcc1zRcl4bisuqmrzTW?si=SIqzqFprTgmT9nvc7i8wAQ&nd=1"
                name="Spotify"
            />
        </>
    );
}
