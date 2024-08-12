import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './calculator';

describe('String Calculator', () => {
    test('renders the calculator component', () => {
        render(<Calculator />);
        expect(screen.getByText('String Calculator')).toBeInTheDocument();
    });

    test('displays 0 when input is an empty string', () => {
        render(<Calculator />);
        const inputField = screen.getByPlaceholderText('Enter numbers');
        fireEvent.change(inputField, { target: { value: '' } });
        fireEvent.click(screen.getByText('Calculate'));
        expect(screen.getByText('Result: 0')).toBeInTheDocument();
    });

    test('displays the correct sum for "1,2,5"', () => {
        render(<Calculator />);
        const inputField = screen.getByPlaceholderText('Enter numbers');
        fireEvent.change(inputField, { target: { value: '1,2,5' } });
        fireEvent.click(screen.getByText('Calculate'));
        expect(screen.getByText('Result: 8')).toBeInTheDocument();
    });

    test('handles newlines in input correctly', () => {
        render(<Calculator />);
        const inputField = screen.getByPlaceholderText('Enter numbers');
        fireEvent.change(inputField, { target: { value: '1\\n2,3' } });
        fireEvent.click(screen.getByText('Calculate'));
        expect(screen.getByText('Result: 6')).toBeInTheDocument();
    });       

    test('throws an error for negative numbers', () => {
        render(<Calculator />);
        const inputField = screen.getByPlaceholderText('Enter numbers');
        fireEvent.change(inputField, { target: { value: '1,-2,3' } });
        fireEvent.click(screen.getByText('Calculate'));
        expect(screen.getByText('Negative numbers not allowed: -2')).toBeInTheDocument();
    });

    test('toggles between text field and textarea', () => {
        render(<Calculator />);
        const toggleButton = screen.getByText('Switch to Textarea');
        fireEvent.click(toggleButton);
        expect(screen.getByPlaceholderText('Enter numbers with optional delimiters')).toBeInTheDocument();
        
        fireEvent.click(screen.getByText('Switch to Text Field'));
        expect(screen.getByPlaceholderText('Enter numbers')).toBeInTheDocument();
    });
});
