import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';
import { ThemeProvider } from '@/context/ThemeContext';

// Mock the Particles component since it might use canvas/webgl
vi.mock('../ui/Particles', () => ({
    default: () => <div data-testid="particles-mock" />
}));

describe('Hero Component', () => {
    it('renders the main heading', () => {
        render(
            <ThemeProvider>
                <Hero />
            </ThemeProvider>
        );

        expect(screen.getByText(/Hello, I'm/i)).toBeInTheDocument();
        expect(screen.getByText(/Shaikh Mohd Arsan/i)).toBeInTheDocument();
    });

    it('renders the call to action buttons', () => {
        render(
            <ThemeProvider>
                <Hero />
            </ThemeProvider>
        );

        expect(screen.getByText(/Explore My Work/i)).toBeInTheDocument();
        expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    });
});
