import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    
return(
    <div className="m-16">
    <h1 className="text-3xl">Oops!!!</h1>
    <h3>The page you requested was not found...</h3>
    
    <h5>{err.status}: {err.statusText}</h5>
    </div>
)
}

export default Error;