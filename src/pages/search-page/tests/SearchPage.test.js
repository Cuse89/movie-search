import React from "react";
import { create, act } from "react-test-renderer";
import SearchPage from "pages/search-page/index";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import { moviesResponse } from "pages/search-page/tests/mockData";

let component;

const renderComponent = () => {
  act(() => {
    component = create(<SearchPage />);
  });
};

describe("when searching for a movie", () => {
  it("it should display the correct amount of results", async () => {
    fetch.mockResponseOnce(JSON.stringify(moviesResponse));
    renderComponent();
    await act(async () => {
      component.root.findByType(InputForm).props.onChange("search text");
    });
    expect(component.root.findByType(ResultsList).props.results.length).toBe(2);
  });
});
