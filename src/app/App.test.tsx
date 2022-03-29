import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('renders header', () => {
        render(<App />);

        expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
        expect(screen.getByRole('heading', { name: /I'm Nicholas Hill/ }));
    });
});
