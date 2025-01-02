import { render, screen } from '../../utils/test-utils';
import Home from '../Home';

describe('Home', () => {
  test('renders hero section', () => {
    render(<Home />);
    
    expect(screen.getByText(/AI Solutions for Modern Business/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  });

  test('renders service cards', () => {
    render(<Home />);
    
    expect(screen.getByText(/Data Analytics/i)).toBeInTheDocument();
    expect(screen.getByText(/Blockchain/i)).toBeInTheDocument();
    expect(screen.getByText(/Machine Learning/i)).toBeInTheDocument();
  });
}); 