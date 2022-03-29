import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('<LandingPage/>', () => {
    describe('Rendering', () => {
        it('renders header', () => {
            render(<LandingPage />);

            expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
            expect(screen.getByRole('heading', { name: /I'm Nicholas Hill/ }));
        });
    });

    describe('Interaction', () => {
        it('goes to the TW website in a new tab when clicking on TW link', () => {
            render(<LandingPage />);

            const twLink = screen.getByRole('link', { name: 'Thoughtworks' });

            expect(twLink).toHaveAttribute(
                'href',
                'https://www.thoughtworks.com'
            );
            expect(twLink).toHaveAttribute('rel', 'noopener');
        });
    });
});
