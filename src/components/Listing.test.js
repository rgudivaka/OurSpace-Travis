import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import Listing from "./Listing";

test("Making a storage card with a listing", () => {
  const testitems = [0, 1, 2, 3, 4, 5];
  const { getByTestId, getBytext } = render(<Listing testitems={testitems} />);

  expect(getByTestId("grid")).toBeInTheDocument();
});
