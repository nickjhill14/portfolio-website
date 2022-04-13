import { screen } from '@testing-library/react';

export function expectRoleIsInDocument(role: string, exactName: string) {
    expect(screen.getByRole(role, { name: exactName })).toBeInTheDocument();
}

function assertExternalLinkIsSafe(link: HTMLElement, href: string) {
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
}

export function expectExternalLinkIsSafe(exactName: string, href: string) {
    const link = screen.getByRole('link', { name: exactName });

    assertExternalLinkIsSafe(link, href);
}

export function expectAllExternalLinksAreSafe(exactName: string, href: string) {
    const links = screen.getAllByRole('link', { name: exactName });

    links.forEach((link) => assertExternalLinkIsSafe(link, href));
}
