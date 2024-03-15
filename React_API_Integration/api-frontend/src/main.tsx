import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SquidContextProvider } from '@squidcloud/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <SquidContextProvider
      options={{
        appId: 'x0qbhkgr5aaixarrhf',
        region: 'us-east-1.aws', //qk28bm6qs7fkbkbb8-dev.ap-south-1.aws.squid.cloud

        environmentId: 'dev', // choose one of 'dev' or 'prod'
        squidDeveloperId: 'oolslnf2a3ucz8kkwb', //
      }}
    >
      <App />
    </SquidContextProvider>
)
