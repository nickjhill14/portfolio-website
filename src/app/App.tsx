import React from 'react';
import LandingPage from '../pages/landingPage/LandingPage';
import { ContactPage } from '../pages/contactPage/ContactPage';
import { ExperiencePage } from '../pages/experiencePage/ExperiencePage';

export default function App() {
    return (
        <>
            <LandingPage />
            <ExperiencePage />
            <ContactPage />
        </>
    );
}
