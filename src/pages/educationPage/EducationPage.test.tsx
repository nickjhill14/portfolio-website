import { render, screen } from '@testing-library/react';
import { EducationPage } from './EducationPage';
import {
    expectExternalLinkIsSafe,
    expectRoleIsInDocument,
} from '../../testUtils/assertionHelpers';

describe('<EducationPage/>', () => {
    describe('rendering', () => {
        it('renders the page', () => {
            render(<EducationPage />);

            expectRoleIsInDocument('region', 'Education Page');
            expectRoleIsInDocument('heading', 'Education');
            expect(screen.getAllByRole('article')).toHaveLength(3);
        });

        it('renders UON education', () => {
            render(<EducationPage />);

            expectRoleIsInDocument(
                'article',
                'University Of Nottingham Education'
            );
            expectRoleIsInDocument(
                'heading',
                'MSc. With Honours In Computer Science (1st Class)'
            );
            expectRoleIsInDocument('link', 'University Of Nottingham');
            expect(
                screen.getByText('Sep. 2013 - Jul. 2017')
            ).toBeInTheDocument();
        });

        it('renders sixth form education', () => {
            render(<EducationPage />);

            expectRoleIsInDocument('article', 'Beaumont Sixth Form Education');
            expectRoleIsInDocument(
                'heading',
                'A Levels In Mathematics, Geography, & IT'
            );
            expectRoleIsInDocument('heading', 'Beaumont School Sixth Form');
            expect(
                screen.getByText('Sep. 2011 - Aug. 2013')
            ).toBeInTheDocument();
        });

        it('renders GCSE education', () => {
            render(<EducationPage />);

            expectRoleIsInDocument('article', 'Beaumont School Education');
            expectRoleIsInDocument(
                'heading',
                'GCSEs Including Triple Science, Business, & English'
            );
            expect(
                screen.getByText('Sep. 2009 - Aug. 2011')
            ).toBeInTheDocument();
        });
    });

    describe('interaction', () => {
        it('opens UON link in new tab', () => {
            render(<EducationPage />);

            expectExternalLinkIsSafe(
                'University Of Nottingham',
                'https://www.nottingham.ac.uk'
            );
        });

        it('opens Beaumont School Sixth Form link in new tab', () => {
            render(<EducationPage />);

            expectExternalLinkIsSafe(
                'Beaumont School Sixth Form',
                'https://beaumontschool.com/sixth-form'
            );
        });

        it('opens Beaumont School link in new tab', () => {
            render(<EducationPage />);

            expectExternalLinkIsSafe(
                'Beaumont School',
                'https://beaumontschool.com'
            );
        });
    });
});
