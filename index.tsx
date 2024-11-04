import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import i18n from './start/i18n';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartApp from './start/App';
import EndApp from './end/App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <StartApp />
        )
    },
    {
        path: "end",
        element: (<EndApp />)
    }
]);

root.render(
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <RouterProvider router={router} />
    </I18nextProvider>
);
