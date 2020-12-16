import { render, screen } from '@testing-library/react';
import App from './App';

test('renders titleElement', () => {
  render(<App />);
  const titleElement = screen.getByText(/TailwindCSS v2.0/i);
  expect(titleElement).toBeInTheDocument();
});
