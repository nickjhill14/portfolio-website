import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('renders Landing Page', () => {
        render(<App />);

        expect(screen.getByRole('banner', { name: 'Landing Page Header' }));
    });
});
