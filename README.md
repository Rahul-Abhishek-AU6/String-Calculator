# String Calculator

This is a simple web application that implements a String Calculator, based on a popular Test-Driven Development (TDD) kata. The application allows users to input a string of numbers and calculates their sum based on various rules, including custom delimiters and newline handling.

## Features

- **Basic Calculation**: Sum of numbers in a comma-separated string.
- **Multiline Input**: Supports multiline input with newline (`\n`) as a separator.
- **Custom Delimiters**: Allows custom delimiters by using a special syntax in the input string.
- **Negative Numbers Handling**: Throws an error if negative numbers are included, showing all negative numbers in the error message.
- **Toggle Input Mode**: Switch between a single-line text input and a multiline textarea input.

## How to Use

1. **Input Field**: 
   - You can enter numbers separated by commas, newlines (`\n`), or custom delimiters.
   - Examples:
     - `"1,2,3"` will return `6`.
     - `"1\n2,3"` will return `6`.
     - `"//;\n1;2"` will return `3`.

2. **Toggle Input Mode**:
   - Use the "Switch to Textarea" button to change the input field from a single-line text input to a multiline textarea.
   - Use the "Switch to Text Field" button to switch back to single-line input mode.

3. **Calculate Button**:
   - After entering your string, click the "Calculate" button to see the result.

4. **Result Display**:
   - The result of the calculation will be displayed below the button.
   - If there are any errors (e.g., negative numbers), an error message will be displayed.

## File Structure

- `index.html`: The main HTML file that includes the structure of the application.
- `styles.css`: Contains all the CSS styling for the application.
- `script.js`: Contains the JavaScript logic for the String Calculator.
  
## Setup and Running

No special setup is required. Simply open the `index.html` file in your browser to use the application.

## Example Input/Output

- **Input**: `""`
  - **Output**: `0`

- **Input**: `"1,2,5"`
  - **Output**: `8`

- **Input**: `"//;\n1;2"`
  - **Output**: `3`

- **Input**: `"1\n2,3"`
  - **Output**: `6`

- **Input**: `"//;\n1;-2;3"`
  - **Output**: `Error: Negative numbers not allowed: -2`

## License

This project is open-source and available under the [GNU GENERAL PUBLIC LICENSE](LICENSE).
