import { render, screen } from '@testing-library/react';
import { ContactPage } from './ContactPage';

describe('<ContactPage/>', () => {
    describe('rendering', () => {
        it('renders title and contact buttons', () => {
            render(<ContactPage />);

            expect(
                screen.getByRole('heading', { name: 'Contact' })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('link', { name: 'Email' })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('link', { name: 'LinkedIn' })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('link', { name: 'GitHub' })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('link', { name: 'Twitter' })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('link', { name: 'Spotify' })
            ).toBeInTheDocument();
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
        ])(
            'opens link in new tab title and contact buttons',
            (linkName, href) => {
                render(<ContactPage />);

                const link = screen.getByRole('link', { name: linkName });
                expect(link).toHaveAttribute('href', href);
                expect(link).toHaveAttribute('target', '_blank');
                expect(link).toHaveAttribute('rel', 'noopener noreferrer');
            }
        );
    });
});
