import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";
beforeEach(() => {
  render(<App />);
});

//test('should include "Now" in the header instead of a time', () => {
  //expect(
  //  screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
 // ).not.toBeInTheDocument();
 // expect(screen.queryByText(/Now/g)).toBeInTheDocument();
//});

//test("should include the <ExampleComponent />", () => {
  //expect(screen.queryByText("Whoa!")).toBeInTheDocument();
//});

//test("should include the <TestComponent />", () => {
  //expect(screen.queryByTitle("time video")).toBeInTheDocument();
//});

// Assuming you are using Jest with Enzyme or a similar library
//it('should include "Now" in the header instead of a time', () => {
  //expect(wrapper.find('header').text()).not.toContain(moment().format('MMMM Do YYYY'));
  //expect(wrapper.find('header').text()).toContain('Now');
//});

//it('should include the ExampleComponent', () => {
 // expect(wrapper.text()).toContain('<ExampleComponent />');
//});

//it('should include the TestComponent', () => {
 // expect(wrapper.text()).toContain('<TestComponent />');
//});

