import { render, screen } from '@testing-library/react';
import { ExternalLink } from './ExternalLink';

describe('<ExternalLink/>', () => {
    describe('rendering', () => {
        it('renders link', () => {
            const name = 'Google';

            render(<ExternalLink name={name} href="#" />);

            expect(screen.getByRole('link', { name })).toBeInTheDocument();
        });
    });

    describe('interaction', () => {
        it('opens link in new tab title and contact buttons', () => {
            const name = 'Google';
            const href = 'google.com';

            render(<ExternalLink name={name} href={href} />);

            const link = screen.getByRole('link', { name });
            expect(link).toHaveAttribute('href', href);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});
