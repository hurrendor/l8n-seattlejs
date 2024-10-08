import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import i18n from './src/i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <App />
    </I18nextProvider>
);
