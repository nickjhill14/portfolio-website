import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('renders title', () => {
        render(<App />);
        expect(
            screen.getByRole('heading', { name: 'Portfolio Website' })
        ).toBeInTheDocument();
    });
});
