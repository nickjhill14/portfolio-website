import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { expectRoleIsInDocument } from '../testUtils/assertionHelpers';

describe('<App/>', () => {
    it('renders pages', () => {
        render(<App />);

        expectRoleIsInDocument('banner', 'Landing Page Header');
        expectRoleIsInDocument('region', 'Experience Page');
        expectRoleIsInDocument('region', 'Education Page');
        expectRoleIsInDocument('region', 'Projects Page');
        expectRoleIsInDocument('region', 'Contact Page');
    });
});
