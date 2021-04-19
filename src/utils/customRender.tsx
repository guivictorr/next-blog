import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const customRender = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default customRender;
