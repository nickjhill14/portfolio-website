import { render } from '@testing-library/react';
import { CVPage } from './CVPage';
import { expectRoleIsInDocument } from '../../testUtils/assertionHelpers';

describe('<CVPage/>', () => {
    it('renders the CV page', () => {
        const label = 'My CV Page';
        const heading = 'My CV';
        const buttonName = 'My Button';
        const children = <button>{buttonName}</button>;

        render(
            <CVPage label={label} heading={heading}>
                {children}
            </CVPage>
        );

        expectRoleIsInDocument('region', label);
        expectRoleIsInDocument('heading', heading);
        expectRoleIsInDocument('button', buttonName);
    });
});
