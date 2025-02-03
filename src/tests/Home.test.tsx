import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home page', () => {
  render(<Home />);
  expect(screen.getByText('Home Page')).toBeInTheDocument();
});