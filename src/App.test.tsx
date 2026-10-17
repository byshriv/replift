import { render, screen } from '@testing-library/react';
import { App } from './App';
import { APP } from './config';

describe('App', () => {
  it('shows the app name and the current version', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Replift' })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Version ${APP.version}`))).toBeInTheDocument();
  });

  it('marks the first milestone as the current step', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveAttribute('aria-current', 'step');
    expect(items).toHaveLength(5);
  });
});
