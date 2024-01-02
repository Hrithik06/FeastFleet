import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err)
    
return(
    <div>
    <h1>Oops!!!</h1>
    <h3>There was an error!!</h3>
    <h5>{err.status}: {err.statusText}</h5>
    </div>
)
}

export default Error;