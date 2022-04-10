interface ExternalLinkProps {
    name: string;
    href: string;
}

export function ExternalLink({ name, href }: ExternalLinkProps) {
    return (
        <a rel="noopener noreferrer" target="_blank" href={href}>
            {name}
        </a>
    );
}
