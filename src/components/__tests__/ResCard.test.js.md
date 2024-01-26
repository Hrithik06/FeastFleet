import ResCard,{withOfferResCard} from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
test("Should render ResCard component with props Data, checking name", ()=>{
  render(<ResCard resData={MOCK_DATA[0]} />);

  const name = screen.getByText("Wow! Momo")
  expect(name).toBeInTheDocument();
});

//Testinf truncated name in ResCard
test("Should render ResCard component with props Data, checking TRUNCATED", ()=>{
    render(<ResCard resData={MOCK_DATA[1]} />);
  
    const name = screen.getByText("Great Indian Khichdi by EatFit")
    expect(name).toBeInTheDocument();
  });


  // Testing Higher Order Component

  it ("Should render Higher Order Component, with Offers", ()=>{
  const OfferedResCard = withOfferResCard(ResCard);

    render(<OfferedResCard resData={MOCK_DATA[2]}/>)

    const offer = screen.getByText("ITEMS AT ₹129");

    expect(offer).toBeInTheDocument();

  })