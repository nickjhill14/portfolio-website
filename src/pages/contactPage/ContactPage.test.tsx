import { render } from '@testing-library/react';
import ContactPage from './ContactPage';
import {
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';

describe('<ContactPage/>', () => {
    describe('rendering', () => {
        it('renders title and contact buttons', () => {
            render(<ContactPage />);

            expectRoleIsInDocument('region', 'Contact Page');
            expectRoleIsInDocument('heading', 'Contact');
            expectRoleIsInDocument('article', 'Contact Links');
            expectRoleIsInDocument('link', 'Email');
            expectRoleIsInDocument('link', 'LinkedIn');
            expectRoleIsInDocument('link', 'GitHub');
            expectRoleIsInDocument('link', 'Twitter');
            expectRoleIsInDocument('link', 'Spotify');
            expectRoleIsInDocument('link', 'CV');
        });
    });

    describe('interaction', () => {
        it.each([
            ['Email', 'mailto:nicholasjhill@live.co.uk'],
            ['LinkedIn', 'https://www.linkedin.com/in/nicholas-j-hill'],
            ['GitHub', 'https://github.com/nickjhill14'],
            ['Twitter', 'https://twitter.com/NicholasJHill14'],
            [
                'Spotify',
                'https://open.spotify.com/album/42Tfcc1zRcl4bisuqmrzTW?si=SIqzqFprTgmT9nvc7i8wAQ&nd=1',
            ],
            ['CV', 'nicholas-hill-cv.pdf'],
        ])('opens link (%s) in new tab at href (%s)', (linkName, href) => {
            render(<ContactPage />);

            expectExternalLinkIsSafe(linkName, href);
        });
    });
});
