import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('renders NotFound page', () => {
  render(<NotFound />);
  expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
});