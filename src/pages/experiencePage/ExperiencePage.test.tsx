import { render, screen } from '@testing-library/react';
import { ExperiencePage } from './ExperiencePage';
import {
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';

describe('<ExperiencePage/>', () => {
    describe('rendering', () => {
        it('renders the page', () => {
            render(<ExperiencePage />);

            expectRoleIsInDocument('region', 'Experience Page');
            expectRoleIsInDocument('heading', 'Experience');
            expect(screen.getAllByRole('article')).toHaveLength(6);
        });

        it('renders TW experience', () => {
            render(<ExperiencePage />);

            expectRoleIsInDocument('article', 'Thoughtworks Experience');
            expectRoleIsInDocument('heading', 'Consultant Developer');
            expectRoleIsInDocument('link', 'Thoughtworks');
            expect(
                screen.getByLabelText(
                    'Time And Location Of Work At Thoughtworks'
                )
            ).toBeInTheDocument();
            expectRoleIsInDocument('list', 'Work At Thoughtworks Summary');
        });
    });

    describe('interaction', () => {
        it('opens TW link in new tab', () => {
            render(<ExperiencePage />);

            expectExternalLinkIsSafe(
                'Thoughtworks',
                'https://www.thoughtworks.com'
            );
        });
    });
});
