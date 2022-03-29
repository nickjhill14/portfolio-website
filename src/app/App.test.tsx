import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    describe('Rendering', () => {
        it('renders header', () => {
            render(<App />);

            expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
            expect(screen.getByRole('heading', { name: /I'm Nicholas Hill/ }));
        });
    });

    describe('Interaction', () => {
        it('clicking on TW link goes to TW website in new tab', () => {
            render(<App />);

            const twLink = screen.getByRole('link', { name: 'Thoughtworks' });

            expect(twLink).toHaveAttribute(
                'href',
                'https://www.thoughtworks.com'
            );
            expect(twLink).toHaveAttribute('target', '_blank');
        });
    });
});
