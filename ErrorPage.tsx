import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error: any = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>An unexpected error has occurred. Try refreshing the page?</p>
            <p>
                Error: <i>{error.name}</i>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;