export interface CVSectionProps {
    label: string;
    heading: string;
    time: string;
    location: string;
    subHeading?: string | JSX.Element;
}

export default function CVSection(props: CVSectionProps) {
    const { label, heading, time, location, subHeading } = props;

    return (
        <article aria-label={label}>
            <h2>{heading}</h2>
            <h3>{subHeading}</h3>
            <p>{time}</p>
            <p>{location}</p>
        </article>
    );
}
