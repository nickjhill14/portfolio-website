import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { headingLines } from './App';

describe('<App/>', () => {
    it('renders header', () => {
        render(<App />);

        expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
        headingLines.forEach((headingLine) =>
            expect(screen.getByRole('heading', { name: headingLine }))
        );
    });
});
