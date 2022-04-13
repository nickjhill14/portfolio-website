import { render, screen } from '@testing-library/react';
import AchievementsPage from './AchievementsPage';
import {
    expectAllExternalLinksAreSafe,
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';
import ProjectsPage from '../projectsPage/ProjectsPage';

describe('<AchievementsPage/>', () => {
    describe('rendering', () => {
        it('renders the page', () => {
            render(<AchievementsPage />);

            expectRoleIsInDocument('region', 'Achievements Page');
            expectRoleIsInDocument('heading', 'Achievements');
            expect(screen.getAllByRole('article')).toHaveLength(5);
            expect(
                screen.getAllByRole('link', {
                    name: 'University Of Nottingham',
                })
            ).toHaveLength(2);
            expect(screen.getAllByText('Jun. 2015')).toHaveLength(2);
        });

        it('renders 7Digital/Esendex prize achievement', () => {
            render(<AchievementsPage />);

            expectRoleIsInDocument(
                'article',
                '7Digital/Esendex Prize for Software Quality Achievement'
            );
            expectRoleIsInDocument(
                'heading',
                '7Digital/Esendex Prize for Software Quality'
            );
        });

        it('renders C++ Hall Of Fame achievement', () => {
            render(<AchievementsPage />);

            expectRoleIsInDocument(
                'article',
                'C++ Individual Project Hall of Fame Achievement'
            );
            expectRoleIsInDocument(
                'heading',
                'C++ Individual Project Hall of Fame'
            );
        });

        it('renders HSK achievement', () => {
            render(<AchievementsPage />);

            expectRoleIsInDocument('article', 'HSK Level 3 Achievement');
            expectRoleIsInDocument('heading', 'HSK Level 3');
            expectRoleIsInDocument('link', 'Hanban');
            expect(screen.getByText('Sep. 2019')).toBeInTheDocument();
            expect(screen.getByText('Hong Kong')).toBeInTheDocument();
        });

        it('renders GA Level 3 achievement', () => {
            render(<AchievementsPage />);

            expectRoleIsInDocument(
                'article',
                'GA Level 3 Certificate Achievement'
            );
            expectRoleIsInDocument('heading', 'GA Level 3 Certificate');
            expectRoleIsInDocument('link', 'Gatehouse Awards');
            expect(screen.getByText('Aug. 2017')).toBeInTheDocument();
        });

        it('renders AQA certificate achievement', () => {
            render(<AchievementsPage />);

            expectRoleIsInDocument(
                'article',
                'AQA Certificate in Microphone Placement Achievement'
            );
            expectRoleIsInDocument(
                'heading',
                'AQA Certificate in Microphone Placement'
            );
            expectRoleIsInDocument('link', 'AQA');
            expect(screen.getByText('Jun. 2014')).toBeInTheDocument();
            expect(screen.getByText('Watford')).toBeInTheDocument();
        });
    });

    describe('interaction', () => {
        it('opens UON links in a new tab', () => {
            render(<ProjectsPage />);

            expectAllExternalLinksAreSafe(
                'University Of Nottingham',
                'https://www.nottingham.ac.uk'
            );
        });

        it('opens Hanban link in new tab', () => {
            render(<AchievementsPage />);

            expectExternalLinkIsSafe('Hanban', 'http://www.chinesetest.cn');
        });

        it('opens Gatehouse Awards link in new tab', () => {
            render(<AchievementsPage />);

            expectExternalLinkIsSafe(
                'Gatehouse Awards',
                'https://www.gatehouseawards.org/qualifications/tefl-teaching-english-as-a-foreign-language'
            );
        });

        it('opens AQA certificate link in new tab', () => {
            render(<AchievementsPage />);

            expectExternalLinkIsSafe('AQA', 'https://www.aqa.org.uk');
        });
    });
});
