import { render, screen } from '@testing-library/react';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';

function renderExternalLink(propsOverride: Partial<ExternalLinkProps>) {
    const props: ExternalLinkProps = {
        name: 'Some Link',
        href: '#',
        ...propsOverride,
    };

    render(<ExternalLink {...props} />);
}

describe('<ExternalLink/>', () => {
    describe('rendering', () => {
        it('renders link', () => {
            const name = 'Google';

            renderExternalLink({ name });

            expect(screen.getByRole('link', { name })).toBeInTheDocument();
        });
    });

    describe('interaction', () => {
        it('opens link in new tab title and contact buttons', () => {
            const name = 'Google';
            const href = 'google.com';

            renderExternalLink({ name, href });

            const link = screen.getByRole('link', { name });
            expect(link).toHaveAttribute('href', href);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});
