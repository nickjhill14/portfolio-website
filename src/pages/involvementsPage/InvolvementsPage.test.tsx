import { render, screen } from '@testing-library/react';
import InvolvementsPage from './InvolvementsPage';
import {
    expectAllExternalLinksAreSafe,
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';
import ProjectsPage from '../projectsPage/ProjectsPage';

describe('<InvolvementsPage/>', () => {
    describe('rendering', () => {
        it('renders the page', () => {
            render(<InvolvementsPage />);

            expectRoleIsInDocument('region', 'Involvements Page');
            expectRoleIsInDocument('heading', 'Involvements');
            expect(screen.getAllByRole('article')).toHaveLength(4);
            expect(
                screen.getAllByRole('heading', { name: 'Footballer' })
            ).toHaveLength(2);
        });

        it('renders guitarist involvement', () => {
            render(<InvolvementsPage />);

            expectRoleIsInDocument('article', 'Guitarist Involvement');
            expectRoleIsInDocument('heading', 'Guitarist');
            expectRoleIsInDocument('link', 'The Ages');
            expect(screen.getByText('Feb. 2010 - Present')).toBeInTheDocument();
        });

        it('renders footballer at UON involvement', () => {
            render(<InvolvementsPage />);

            expectRoleIsInDocument(
                'article',
                'Footballer at University Of Nottingham Involvement'
            );
            expectRoleIsInDocument('link', 'University Of Nottingham');
            expect(
                screen.getByText('Sep. 2013 - Jun. 2016')
            ).toBeInTheDocument();
        });

        it('renders musician, sound engineer, producer involvement', () => {
            render(<InvolvementsPage />);

            expectRoleIsInDocument(
                'article',
                'Musician, Sound Engineer, & Producer Involvement'
            );
            expectRoleIsInDocument(
                'heading',
                'Musician, Sound Engineer, & Producer'
            );
            expectRoleIsInDocument('heading', 'YouthPoint Studio');
            expect(
                screen.getByText('Feb. 2010 - Jan. 2016')
            ).toBeInTheDocument();
            expect(screen.getByText('Watford')).toBeInTheDocument();
        });

        it('renders footballer at Harvesters FC involvement', () => {
            render(<InvolvementsPage />);

            expectRoleIsInDocument(
                'article',
                'Footballer At Harvesters FC Involvement'
            );
            expectRoleIsInDocument('link', 'Harvesters FC');
            expect(
                screen.getByText('Aug. 2006 - Jun. 2016')
            ).toBeInTheDocument();
            expect(screen.getByText('St Albans')).toBeInTheDocument();
        });
    });

    describe('interaction', () => {
        it('opens The Ages link in new tab', () => {
            render(<InvolvementsPage />);

            expectExternalLinkIsSafe(
                'The Ages',
                'https://open.spotify.com/album/42Tfcc1zRcl4bisuqmrzTW?si=U1jiwwyjTWCF7fRFwfhICA'
            );
        });

        it('opens UON link in a new tab', () => {
            render(<ProjectsPage />);

            expectAllExternalLinksAreSafe(
                'University Of Nottingham',
                'https://www.nottingham.ac.uk'
            );
        });

        it('opens Harvesters FC link in new tab', () => {
            render(<InvolvementsPage />);

            expectExternalLinkIsSafe(
                'Harvesters FC',
                'https://www.harvestersfc.co.uk'
            );
        });
    });
});
