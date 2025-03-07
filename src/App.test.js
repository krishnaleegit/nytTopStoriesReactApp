import { render, screen } from '@testing-library/react';
import App from './components/App/App';

test('renders App Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/The New York Times/i);
  expect(linkElement).toBeInTheDocument();
});
