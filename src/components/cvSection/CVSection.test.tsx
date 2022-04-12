import CVSection, { CVSectionProps } from './CVSection';
import { render, screen } from '@testing-library/react';
import { ExternalLink } from '../externalLink/ExternalLink';
import { expectRoleIsInDocument } from '../../testUtils/assertionHelpers';

function renderCVSection(propsOverride?: Partial<CVSectionProps>) {
    const props: CVSectionProps = {
        label: 'Some Label',
        heading: 'Some Heading',
        time: 'Some Time',
        ...propsOverride,
    };

    render(<CVSection {...props} />);
}

describe('<CVSection/>', () => {
    it('renders the CV section', () => {
        const heading = 'Some Heading';
        const label = 'Some Label';
        const time = 'Some Time';
        const props: CVSectionProps = { label, heading, time };

        renderCVSection({ ...props });

        expectRoleIsInDocument('article', label);
        expectRoleIsInDocument('heading', heading);
        expect(screen.getByText(time)).toBeInTheDocument();
    });

    it('renders the subheading as an ExternalLink', () => {
        const externalLinkName = 'My Sub-Heading Link';
        const externalLink = <ExternalLink name={externalLinkName} href="#" />;

        renderCVSection({ subHeading: externalLink });

        expectRoleIsInDocument('heading', externalLinkName);
        expectRoleIsInDocument('link', externalLinkName);
    });

    it('renders the subheading as a string (heading)', () => {
        const subHeading = 'My Sub-Heading';

        renderCVSection({ subHeading });

        expectRoleIsInDocument('heading', subHeading);
    });

    it('renders the location', () => {
        const location = 'My Location';

        renderCVSection({ location });

        expect(screen.getByText(location)).toBeInTheDocument();
    });
});
