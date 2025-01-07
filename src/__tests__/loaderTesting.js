import React from 'react';
import { render, screen,waitFor,fireEvent } from '@testing-library/react'
import App  from '../App';


test("App component renders successfully", async () => {
    render(<App />);
    
    // Check for the main title
    const container = screen.getByText('Kickstarter Project');
    expect(container).toBeInTheDocument();

    // Wait for the "Kickstarter Projects" text to appear
    const spinner = screen.getByText(/Loading.../i);
    expect(spinner).toBeInTheDocument();
});

test("Container with Kickstarter Projects appears after 2 seconds", async () => {
    render(<App />);

    await waitFor(() => {
        const container = screen.getByText('Kickstarter Project');
        expect(container).toBeInTheDocument();
    }, { timeout: 3000 }); // Set a timeout longer than 2 seconds to ensure it waits long enough
});

test("calls onPageChange with page number 2 when page 2 button is clicked", async () => {
    render(<App />);
    await waitFor(() => {
     const page2Button = screen.getByRole('button', { name: 'Page 2' });
     fireEvent.click(page2Button);
     const index5 = screen.getByText('5');
     expect(index5).toBeInTheDocument();
     const nextPageButton = screen.getByRole('button', { name: 'Next Page' });
     fireEvent.click(nextPageButton);
     const prevPageButton = screen.getByRole('button', { name: 'Previous Page' });
     fireEvent.click(prevPageButton);

    }, { timeout: 3000 }); // Set a timeout longer than 2 seconds to ensure it waits long enough
    
});
