const { render, screen, fireEvent } = require('@testing-library/react');
const MeetOurTeam = require('./MeetOurTeam');

describe('Meet Our Team Page', () => {
  test('renders the hero section', () => {
    render(<MeetOurTeam />);
    expect(screen.getByText('TechVentures')).toBeInTheDocument();
    expect(screen.getByText('Building Tomorrow\'s Solutions')).toBeInTheDocument();
  });

  test('renders the team member cards', () => {
    render(<MeetOurTeam />);
    const teamCards = screen.getAllByTestId('team-card');
    expect(teamCards).toHaveLength(6);
    teamCards.forEach((card) => {
      expect(screen.getByTestId('profile-photo', { container: card })).toBeInTheDocument();
      expect(screen.getByTestId('name', { container: card })).toBeInTheDocument();
      expect(screen.getByTestId('job-title', { container: card })).toBeInTheDocument();
      expect(screen.getByTestId('bio', { container: card })).toBeInTheDocument();
      expect(screen.getByTestId('linkedin-link', { container: card })).toBeInTheDocument();
      expect(screen.getByTestId('twitter-link', { container: card })).toBeInTheDocument();
      expect(screen.getByTestId('github-link', { container: card })).toBeInTheDocument();
    });
  });

  test('hover effect on team member cards', () => {
    render(<MeetOurTeam />);
    const teamCard = screen.getByTestId('team-card');
    expect(teamCard).not.toHaveClass('hover:shadow-lg hover:translate-y-[-4px]');
    fireEvent.mouseOver(teamCard);
    expect(teamCard).toHaveClass('hover:shadow-lg hover:translate-y-[-4px]');
  });

  test('responsive design on mobile', () => {
    // Set up the window size to mobile dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 480,
    });

    render(<MeetOurTeam />);
    const teamCards = screen.getAllByTestId('team-card');
    teamCards.forEach((card) => {
      expect(card).toHaveClass('flex-col');
    });
  });

  test('contact section', () => {
    render(<MeetOurTeam />);
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('office-location')).toBeInTheDocument();
  });
});