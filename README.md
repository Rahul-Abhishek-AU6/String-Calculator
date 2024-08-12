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

## Folder Structure

- public/: Contains static files like index.html.
- assets/: Contains CSS and JS files.
  - styles.css: Contains all the CSS styling for the application
- src/: Contains the source code for the application.
  - components/: React components for the application.
    - calculator.js: Contains the JavaScript logic for the String Calculator.
    - calculator.test.js: Contains test cases.
  - App.js: Main application component.
  - index.js: Entry point for the React application.
- README.md: This file.

## Setup and Running

## Live Demo

You can try out the live application here: [String Calculator](https://main--string-calculator.netlify.app/)


### Cloning the Repository

To run the application locally, you can clone the repository using the following steps:

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/Rahul-Abhishek-AU6/String-Calculator.git
3. Navigate to the cloned directory:
   ```bash
   cd String-Calculator
4. Install Dependencies
   ```bash
   npm install
5. Start the Development Server
   ```bash
   npm start
   // The application will be available at http://localhost:3000.


## GitHub Repository
The source code for this application is available on GitHub: https://github.com/Rahul-Abhishek-AU6/String-Calculator


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

## Testing
To run the tests, use the following command:

```bash
   npm test
   ```

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to include appropriate tests and documentation.

## License

This project is open-source and available under the [GNU GENERAL PUBLIC LICENSE](LICENSE).
