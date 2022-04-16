import { render, screen } from '@testing-library/react';
import { CVPage } from './CVPage';
import { expectRoleIsInDocument } from '../../testUtils/assertionHelpers';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

describe('<CVPage/>', () => {
    it('renders the CV page', () => {
        const label = 'My CV Page';
        const headingIcon = faCoffee;
        const heading = 'My CV';
        const buttonName = 'My Button';
        const children = <button>{buttonName}</button>;

        render(
            <CVPage label={label} heading={heading} headingIcon={headingIcon}>
                {children}
            </CVPage>
        );

        expectRoleIsInDocument('region', label);
        const headingElement = screen.getByRole('heading', { name: heading });
        expect(headingElement.previousElementSibling).toHaveAttribute(
            'data-icon',
            'mug-saucer'
        );
        expectRoleIsInDocument('button', buttonName);
    });
});
