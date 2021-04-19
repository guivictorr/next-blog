import { screen } from '@testing-library/react';
import Header from '.';
import customRender from '../../utils/customRender';

describe('<Header/>', () => {
  it('shoud have a href to root page', () => {
    customRender(<Header />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
