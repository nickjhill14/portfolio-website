import { screen } from '@testing-library/react';

export function expectRoleIsInDocument(role: string, exactName: string) {
    expect(screen.getByRole(role, { name: exactName })).toBeInTheDocument();
}

export function expectExternalLinkIsSafe(exactName: string, href: string) {
    const link = screen.getByRole('link', { name: exactName });

    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
}
