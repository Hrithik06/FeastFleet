import ResMenu from "../ResMenu";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
//ResMenu data from cusotm Hook, useResMenu Hook
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
test("Should Load ResMenu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <ResMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Say ! Meat (6)");
  expect(accordionHeader).toBeInTheDocument();
});

test("Should Load Items when Category is Clicked", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <ResMenu />
      </Provider>
    )
  );
  //Click on Category Header
  fireEvent.click(screen.getByText("Say ! Meat (6)"));
  expect(screen.getAllByTestId("foodItem").length).toBe(6);
});

it("Should Update Header with Cart (1) Count when Add is clicked", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <ResMenu />
        </BrowserRouter>
      </Provider>
    );
  });

  //Click on Category
  fireEvent.click(screen.getByText("Say ! Meat (6)"));

  //Get all Add Buttons
  const addBtns = screen.getAllByText("Add +");
  expect(addBtns.length).toBe(6);

  //Click on Add Button of First Item
  fireEvent.click(addBtns[0]);

  //Cart Item should update to 1

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
});

it("Should Update Header with Cart (3) Count when Add is clicked on 2 items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  //Click on Category
  fireEvent.click(screen.getByText("Say ! Meat (6)"));

  //Get all Add Buttons
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  expect(addBtns.length).toBe(6);

  //Click on Add Button of Second Item
  fireEvent.click(addBtns[1]);
  //Click on Add Button of Third Item
  fireEvent.click(addBtns[2]);

  //Cart Item should update to 3
  //3 Because it also takes the previous Add
  expect(screen.getByText("Cart (3)")).toBeInTheDocument();
});

it("Should have 3 items in Cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          // No need of ResMenu or Header
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  expect(screen.getAllByTestId("cartItem").length).toBe(3);
});

it("Should update Cart Items when Remove Button is clicked on Item 1", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          // No need of ResMenu or Header
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const removeBtns = screen.getAllByRole("button", { name: "Remove" });

  //REmove first cart item

  fireEvent.click(removeBtns[1]);

  const removeBtnsAfterClick = screen.getAllByRole("button", {
    name: "Remove",
  });

  expect(removeBtnsAfterClick.length).toBe(2);
});

it("Clear cart when Clicked clear cart and display message", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          // No need of ResMenu or Header
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(
    screen.getByText(
      "Oops! Your Cart is as Empty as a Cookie Jar at Midnight 🍪"
    )
  ).toBeInTheDocument();
});
