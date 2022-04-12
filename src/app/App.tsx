import React from 'react';
import LandingPage from '../pages/landingPage/LandingPage';
import { ContactPage } from '../pages/contactPage/ContactPage';
import { ExperiencePage } from '../pages/experiencePage/ExperiencePage';
import { EducationPage } from '../pages/educationPage/EducationPage';

export default function App() {
    return (
        <>
            <LandingPage />
            <ExperiencePage />
            <EducationPage />
            <ContactPage />
        </>
    );
}
