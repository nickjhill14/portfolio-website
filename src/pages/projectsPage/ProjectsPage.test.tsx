import { render, screen } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';
import {
    expectAllExternalLinksAreSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';

describe('<ProjectsPage/>', () => {
    describe('rendering', () => {
        it('renders the page', () => {
            render(<ProjectsPage />);

            expectRoleIsInDocument('region', 'Projects Page');
            const headingElement = screen.getByRole('heading', {
                name: 'Projects',
            });
            expect(headingElement.previousElementSibling).toHaveAttribute(
                'data-icon',
                'robot'
            );
            expect(screen.getAllByRole('article')).toHaveLength(4);
            expect(
                screen.getAllByRole('link', {
                    name: 'University Of Nottingham',
                })
            ).toHaveLength(4);
        });

        it('renders autonomous robots project', () => {
            render(<ProjectsPage />);

            expectRoleIsInDocument(
                'article',
                'Autonomous Robot Image Tagging System Project'
            );
            expectRoleIsInDocument(
                'heading',
                'Autonomous Robot Image Tagging System'
            );
            expect(
                screen.getByText('Sep. 2014 - Jul. 2015')
            ).toBeInTheDocument();
        });

        it('renders teach me maths app project', () => {
            render(<ProjectsPage />);

            expectRoleIsInDocument(
                'article',
                'Teach Me Maths Application Project'
            );
            expectRoleIsInDocument('heading', 'Teach Me Maths Application');
            expect(
                screen.getByText('Sep. 2015 - Jul. 2016')
            ).toBeInTheDocument();
        });

        it('renders bench-press sense project', () => {
            render(<ProjectsPage />);

            expectRoleIsInDocument('article', 'Bench-Press Sense Project');
            expectRoleIsInDocument('heading', 'Bench-Press Sense');
            expect(
                screen.getByText('Jan. 2017 - Jul. 2017')
            ).toBeInTheDocument();
        });

        it('renders opportunistic routing protocols project', () => {
            render(<ProjectsPage />);

            expectRoleIsInDocument(
                'article',
                'Opportunistic Routing Protocols Project'
            );
            expectRoleIsInDocument(
                'heading',
                'Opportunistic Routing Protocols'
            );
            expect(
                screen.getByText('Sep. 2016 - Jan. 2017')
            ).toBeInTheDocument();
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
    });
});
