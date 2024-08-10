function add(numbers) {
  if (!numbers) {
    return 0;
  }

  let delimiter = ",";
  let numberString = numbers;

  // Replace '\n' with an actual newline character
  numberString = numberString.replace(/\\n/g, "\n");

  // Check for custom delimiter
  if (numberString.startsWith("//")) {
    const delimiterEndIndex = numberString.indexOf("\n");
    delimiter = numberString.substring(2, delimiterEndIndex);
    numberString = numberString.substring(delimiterEndIndex + 1);
  }

  // Split numbers by the delimiter and actual newline
  const nums = numberString.split(new RegExp(`[${delimiter}\n]`)).map(Number);

  // Check for negative numbers
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

function calculate() {
  const input = document.getElementById("numbersInput").value;
  const resultDiv = document.getElementById("result");

  try {
    const result = add(input);
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.color = "#333";
  } catch (error) {
    resultDiv.textContent = error.message;
    resultDiv.style.color = "red";
  }
}

function toggleInput() {
  const inputField = document.getElementById("numbersInput");
  const toggleButton = document.querySelector(".toggle-button");

  if (inputField.tagName === "INPUT") {
    // Switch to textarea
    const textarea = document.createElement("textarea");
    textarea.id = "numbersInput";
    textarea.className = "input-field";
    textarea.placeholder = "Enter numbers with optional delimiters";
    textarea.value = inputField.value;
    textarea.style.height = "100px"; // Adjust textarea height
    inputField.replaceWith(textarea);
    toggleButton.textContent = "Switch to Text Field";
  } else {
    // Switch to input field
    const input = document.createElement("input");
    input.type = "text";
    input.id = "numbersInput";
    input.className = "input-field";
    input.placeholder = "Enter numbers";
    input.value = inputField.value;
    inputField.replaceWith(input);
    toggleButton.textContent = "Switch to Textarea";
  }
}
