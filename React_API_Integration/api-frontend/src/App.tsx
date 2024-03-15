import { useState,useEffect  } from 'react'
import './App.css'
import { useSquid } from '@squidcloud/react';
interface RandomFact {
  fact: string;
  length: number;
}

function App() {
  const squidcloud = useSquid();
  //const squid = new Squid({ appId: 'x0qbhkgr5aaixarrhf', region: "us-east-1.aws",environmentId:"dev" });
  const [randomFact, setFact] = useState({ fact: '', length: 0 });  
  useEffect(() => {
    squidcloud
      .api()
      .request('catFacts', 'getRandomFact', { max_length: 70 })
      .then((data) => {
        setFact(data.body as RandomFact);
      });
  }, []);
  
  return (
    <>
       <div>
        Fact: {randomFact?.fact} <br />
        Length: {randomFact?.length}
      </div>     
    </>
  )
}

export default App
