import { render, screen } from '@testing-library/react';
import { ExperiencePage } from './ExperiencePage';
import {
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';

describe('<EducationPage/>', () => {
    describe('rendering', () => {
        it('renders the page', () => {
            render(<ExperiencePage />);

            expectRoleIsInDocument('region', 'Experience Page');
            expectRoleIsInDocument('heading', 'Experience');
            expect(screen.getAllByRole('article')).toHaveLength(3);
        });

        it('renders TW experience', () => {
            render(<ExperiencePage />);

            expectRoleIsInDocument('article', 'Thoughtworks Experience');
            expectRoleIsInDocument('heading', 'Consultant Developer');
            expectRoleIsInDocument('link', 'Thoughtworks');
            expect(screen.getByText('Feb. 2020 - Present')).toBeInTheDocument();
            expect(screen.getByText('London')).toBeInTheDocument();
        });

        it('renders teaching experience', () => {
            render(<ExperiencePage />);

            expectRoleIsInDocument('article', 'Teaching Experience');
            expectRoleIsInDocument('heading', 'English Teacher');
            expectRoleIsInDocument('heading', 'SIK & Cannan Kindergarten');
            expect(
                screen.getByText('Sep. 2017 - Aug. 2019')
            ).toBeInTheDocument();
            expect(
                screen.getByText('Shenzhen & Hong Kong')
            ).toBeInTheDocument();
        });

        it('renders barman and barista experience', () => {
            render(<ExperiencePage />);

            expectRoleIsInDocument('article', 'Barista & Barman Experience');
            expectRoleIsInDocument('heading', 'Barista & Barman');
            expectRoleIsInDocument(
                'heading',
                'Hertsmere Leisure & HAP Recruitment'
            );
            expect(
                screen.getByText('Mar. 2012 - Sep. 2017')
            ).toBeInTheDocument();
            expect(screen.getByText('UK')).toBeInTheDocument();
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
