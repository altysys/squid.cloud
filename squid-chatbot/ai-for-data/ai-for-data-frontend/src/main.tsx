import { SquidContextProvider } from '@squidcloud/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SquidContextProvider
    options={{
      appId: 's1y1r1810jf0xk4it6', // Add your app ID
      region: 'us-east-1.aws', // Set your application region here
      environmentId: 'dev',
      squidDeveloperId: 'fmc20d1yufeci97aua', // Add your developer ID
    }}
  >
    <App />
  </SquidContextProvider>,
);
