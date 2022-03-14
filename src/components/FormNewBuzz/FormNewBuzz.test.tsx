import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import FormNewBuzz from "./FormNewBuzz";

describe("Given a form component", () => {
  describe("When it's rendered", () => {
    test("It should display a button with the text 'Buzz It!", () => {
      const textButton = "Buzz It!";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormNewBuzz />
          </Provider>
        </BrowserRouter>
      );

      const textFounded = screen.getByText(textButton);

      expect(textFounded).toBeInTheDocument();
    });

    test("It should display a form with an input to writte a message", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormNewBuzz />
          </Provider>
        </BrowserRouter>
      );

      const textFounded = screen.getByRole("textbox", {
        name: "Writte your buzz here...",
      });

      expect(textFounded).toBeInTheDocument();
    });
  });
});