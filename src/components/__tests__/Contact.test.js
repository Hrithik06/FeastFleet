import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Load Contact Component", () => {
  render(<Contact />);
  const heading = screen.getAllByRole("heading");
  expect(heading.length).not.toBeNull();
  console.log(heading.length)
  

  const inputName = screen.getAllByRole("textbox");
  expect(inputName.length).toBe(2)
console.log(inputName.length)

  const button = screen.getByText("Submit");


  expect(button).toBeInTheDocument();
});
