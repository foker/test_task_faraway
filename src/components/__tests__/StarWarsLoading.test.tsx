import { render, screen } from '@testing-library/react';
import StarWarsLoading from '../common/DelayedLoading/StarWarsLoading';

describe('StarWarsLoading', () => {
  it('renders loading component', () => {
    render(<StarWarsLoading />);
    const loadingElement = screen.getByTestId('star-wars-loading');
    expect(loadingElement).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<StarWarsLoading />);
    const loadingElement = screen.getByTestId('star-wars-loading');
    expect(loadingElement).toHaveClass('loadingContainer');
  });
}); 