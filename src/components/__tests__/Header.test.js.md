import {render,screen,fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
it("Should render Header Component with Login Button", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider >
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
})

it("Should render Cart Item in Header", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider >
        </BrowserRouter>
    );
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})

it("Should change Login Button to Logout Button OnClick",()=>{
    render(<BrowserRouter>
        <Provider store={appStore} >
        <Header />
        </Provider >
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})