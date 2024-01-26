import ResMenu from "../ResMenu";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenuData.json"

//ResMenu data from cusotm Hook, useResMenu Hook
global.fetch=jest.fn(()=>{
    Promoise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
test("Should Load ResMenu Component", async () => {
  await act(async () => render(<ResMenu />));

  const 
});
