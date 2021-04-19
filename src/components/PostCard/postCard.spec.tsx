import { screen } from '@testing-library/react';
import PostCard from '.';
import customRender from '../../utils/customRender';

describe('<PostCard/>', () => {
  it('shoud have a href to root page', () => {
    customRender(
      <PostCard
        createdAt="10/03/20"
        description="descrição"
        id={1}
        title="titulo"
      />,
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', `/post/1`);
  });
});
