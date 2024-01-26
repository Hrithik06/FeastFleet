import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Main from "../Main";
import {fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMockData.json";

// console.log(MOCK_DATA);

global.fetch = jest.fn(() => {
  // const data = await fetch(HOME_API); in Main Component

  return Promise.resolve({
    json: () => {
      //this promise actually has data
      // const json = await data.json(); in Main Component
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should search the ResList for 'Pizza' text input in Main Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByTestId("searchBtn");
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput,{target:{value:"pizza"}})
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  console.log(cardsAfterSearch)
  
  expect(cardsAfterSearch.length).toBe(1);
});



it("Should Filter Top Rated Restraunts", async()=>{
    await act(async () =>
      render(
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"})
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(4);

})