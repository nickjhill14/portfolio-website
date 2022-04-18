import './cv-section.css';

export interface CVSectionProps {
    label: string;
    heading: string;
    time: string;
    location?: string;
    subHeading?: string | JSX.Element;
}

export default function CVSection(props: CVSectionProps) {
    const { label, heading, time, location, subHeading } = props;

    return (
        <article className="cvSection" aria-label={label}>
            <h2 className="cvSectionHeading">{heading}</h2>
            <h3 className="cvSectionSubHeading">{subHeading}</h3>
            <div className="cvSectionTimeLocation">
                <p>{time}</p>
                {location && <p>{location}</p>}
            </div>
        </article>
    );
}
