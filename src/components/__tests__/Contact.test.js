import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact page tests", ()=>{
  test("Load Contact Component", () => {
    render(<Contact />);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).not.toBeNull();
    console.log(heading.length);
  });
  
  it("Should load 2 Input textboxes", () => {
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    console.log(inputBoxes.length);
  });
  
  test("Should load button with Text Submit", () => {
    const button = screen.getByText("Submit");
  
    expect(button).toBeInTheDocument();
  });
  
})