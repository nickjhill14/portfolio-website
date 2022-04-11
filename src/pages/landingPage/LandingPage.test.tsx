import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import {
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';

describe('<LandingPage/>', () => {
    describe('rendering', () => {
        it('renders header', () => {
            render(<LandingPage />);

            expectRoleIsInDocument('banner', 'Landing Page Header');
            expect(screen.getByRole('heading', { name: /I'm Nicholas Hill/ }));
        });
    });

    describe('interaction', () => {
        it('goes to the TW website in a new tab when clicking on TW link', () => {
            render(<LandingPage />);

            expectExternalLinkIsSafe(
                'Thoughtworks',
                'https://www.thoughtworks.com'
            );
        });
    });
});
