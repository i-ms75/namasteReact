import { useRouteError } from "react-router";
const Error = () =>
{
    const err = useRouteError();
    return (
        <div>
            <h1> Opps!! address not found </h1>
            <h3>Error code: {err.status}</h3>
        </div>
    )
}

export default Error;