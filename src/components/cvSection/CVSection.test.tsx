import CVSection, { CVSectionProps } from './CVSection';
import { render } from '@testing-library/react';
import { ExternalLink } from '../externalLink/ExternalLink';
import { expectRoleIsInDocument } from '../../testUtils/assertionHelpers';

function renderCVSection(propsOverride?: Partial<CVSectionProps>) {
    const props: CVSectionProps = {
        label: 'Some Label',
        heading: 'Some Heading',
        time: 'Some Time',
        location: 'Some Location',
        ...propsOverride,
    };

    render(<CVSection {...props} />);
}

describe('<CVSection/>', () => {
    it('renders the CV section', () => {
        renderCVSection();
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
});
