import React from "react";
import { create, act } from "react-test-renderer";
import SearchPage from "pages/search-page/index";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import {
  movies,
  moviesExtraInfo,
  moviesPage2
} from "pages/search-page/tests/mockData";

let component;

const renderComponent = () => {
  act(() => {
    component = create(<SearchPage />);
  });
};

test("it should display the correct amount of results", async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  renderComponent();
  await act(async () => {
    component.root.findByType(InputForm).props.onChange("search text");
  });
  expect(component.root.findByType(ResultsList).props.results.length).toEqual(
    2
  );
});

test("it should model the movies results to use just the required data", async () => {
  fetch.mockResponseOnce(JSON.stringify(moviesExtraInfo));
  renderComponent();
  await act(async () => {
    component.root.findByType(InputForm).props.onChange("search text");
  });
  expect(component.root.findByType(ResultsList).props.results[0]).toEqual({
    id: 1,
    title: "Mock movie 1"
  });
});

test("it should show error message with fetch error", async () => {
  fetch.mockAbortOnce();
  renderComponent();
  await act(async () => {
    component.root.findByType(InputForm).props.onChange("search text");
  });
  expect(component.root.findByType(ResultsList).props.hasError).toBe(true);
});

test("it should fetch data again on query change", async () => {
  fetch.mockResponses(
    [JSON.stringify(movies), { status: 200 }],
    [JSON.stringify(moviesPage2), { status: 200 }]
  );
  renderComponent();
  await act(async () => {
    component.root.findByType(InputForm).props.onChange("search text");
  });
  expect(component.root.findByType(ResultsList).props.results[0].id).toEqual(1);
  await act(async () => {
    component.root.findByType(InputForm).props.onChange("search texts");
  });
  expect(component.root.findByType(ResultsList).props.results[0].id).toEqual(3);
});

test("it should fetch data again on pagination change", async () => {
  fetch.mockResponses(
    [JSON.stringify(movies), { status: 200 }],
    [JSON.stringify(moviesPage2), { status: 200 }]
  );
  renderComponent();
  await act(async () => {
    component.root.findByType(InputForm).props.onChange("search text");
  });
  expect(component.root.findByType(ResultsList).props.results[0].id).toEqual(1);
  await act(async () => {
    component.root.findByType(ResultsList).props.onPaginationChange(2);
  });
  expect(component.root.findByType(ResultsList).props.results[0].id).toEqual(3);
});
