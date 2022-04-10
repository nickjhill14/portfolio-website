import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('renders pages', () => {
        render(<App />);

        expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
        expect(screen.getByRole('heading', { name: 'Contact' }));
    });
});
