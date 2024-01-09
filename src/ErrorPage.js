import { useRouteError, userRouteError } from "react-router-dom"
import "./ErrorPage.css"

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="ErrorPage">
            <header className="ErrorPage-header">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </header>
        </div>
    );
} 

export default ErrorPage;