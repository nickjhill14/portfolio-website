import React from 'react';
import LandingPage from '../pages/landingPage/LandingPage';
import ContactPage from '../pages/contactPage/ContactPage';
import AchievementsPage from '../pages/achievementsPage/AchievementsPage';
import EducationPage from '../pages/educationPage/EducationPage';
import ProjectsPage from '../pages/projectsPage/ProjectsPage';
import ExperiencePage from '../pages/experiencePage/ExperiencePage';
import InvolvementsPage from '../pages/involvementsPage/InvolvementsPage';

export default function App() {
    return (
        <>
            <LandingPage />
            <ExperiencePage />
            <EducationPage />
            <ProjectsPage />
            <AchievementsPage />
            <InvolvementsPage />
            <ContactPage />
        </>
    );
}
