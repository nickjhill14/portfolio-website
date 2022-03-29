import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { headingLine1, headingLine2, headingLine3 } from './App';

describe('<App/>', () => {
    it('renders header', () => {
        render(<App />);

        expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
        expect(screen.getByRole('heading', { name: headingLine1 }));
        expect(screen.getByRole('heading', { name: headingLine2 }));
        expect(screen.getByRole('heading', { name: headingLine3 }));
    });
});
