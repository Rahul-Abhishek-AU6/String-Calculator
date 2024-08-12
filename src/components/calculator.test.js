import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "./calculator";

describe("String Calculator", () => {
  test("handles empty input", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 0")).toBeInTheDocument();
  });

  test("handles single number input", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 5")).toBeInTheDocument();
  });

  test("handles multiple numbers separated by commas", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("handles numbers separated by newlines", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1\n2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("handles custom delimiters", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "//;\n1;2" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 3")).toBeInTheDocument();
  });

  test("throws error for negative numbers", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,-2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(
      screen.getByText("Negative numbers not allowed: -2")
    ).toBeInTheDocument();
  });

  test("handles very large numbers", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1000,2000,3000" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6000")).toBeInTheDocument();
  });

  test("handles very long input", () => {
    const longInput = "1," + "2,".repeat(10) + "3";
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: longInput },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 24")).toBeInTheDocument();
  });
});
