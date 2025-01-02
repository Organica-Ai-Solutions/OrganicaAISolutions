import { render, screen } from '../../utils/test-utils';
import Services from '../Services';

describe('Services', () => {
  test('renders services page content', () => {
    render(<Services />);
    
    // Check for main headings
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Cutting-Edge Technology Solutions')).toBeInTheDocument();
    
    // Check for all service titles
    expect(screen.getByText('Artificial Intelligence')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
    expect(screen.getByText('Advanced Analytics')).toBeInTheDocument();
    expect(screen.getByText('Technology Consulting')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    
    // Check for CTA section
    expect(screen.getByText('Ready to transform your business?')).toBeInTheDocument();
    expect(screen.getByText('Contact us now')).toBeInTheDocument();
    expect(screen.getByText('Learn more')).toBeInTheDocument();
  });

  test('renders service descriptions', () => {
    render(<Services />);
    
    expect(screen.getByText(/Advanced AI solutions for business process automation/)).toBeInTheDocument();
    expect(screen.getByText(/Native and cross-platform mobile application development/)).toBeInTheDocument();
    expect(screen.getByText(/Implementation of blockchain solutions/)).toBeInTheDocument();
    expect(screen.getByText(/Data analysis and Business Intelligence/)).toBeInTheDocument();
    expect(screen.getByText(/Expert advice on digital transformation/)).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive data and system protection/)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Services />);
    
    const contactLink = screen.getByRole('link', { name: /contact us now/i });
    const learnMoreLink = screen.getByRole('link', { name: /learn more/i });
    
    expect(contactLink).toHaveAttribute('href', '/contact');
    expect(learnMoreLink).toHaveAttribute('href', '/about');
  });
}); 