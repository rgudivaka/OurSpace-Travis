import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Making a storage card with a listing", () => {
  const testitems = [0, 1, 2, 3, 4, 5];
  const { getByTestId, getBytext } = render(<App />);

  expect(getByTestId("BottomBar")).toBeInTheDocument();
  fireEvent.click(getByTestId("filterButton"));
  expect(getByTestId("submit").textContent).toBe("Submit");
});
