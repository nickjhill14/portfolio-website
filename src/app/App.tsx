import React from 'react';
import LandingPage from '../pages/landingPage/LandingPage';
import ContactPage from '../pages/contactPage/ContactPage';
import AchievementsPage from '../pages/achievementsPage/AchievementsPage';
import EducationPage from '../pages/educationPage/EducationPage';
import ProjectsPage from '../pages/projectsPage/ProjectsPage';
import ExperiencePage from '../pages/experiencePage/ExperiencePage';

export default function App() {
    return (
        <>
            <LandingPage />
            <ExperiencePage />
            <EducationPage />
            <ProjectsPage />
            <AchievementsPage />
            <ContactPage />
        </>
    );
}
