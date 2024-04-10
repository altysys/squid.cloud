import { useSquid } from '@squidcloud/react';
import Options from './Options.tsx';
import { useState,useEffect  } from 'react'
export default function ListBooks() {
  const squidcloud = useSquid();
  const [data, setBooks] = useState([]);  
  useEffect(() => {
    squidcloud
      .api()
      .request('books', 'getAllBooks', { max_length: 70 })
      .then((response) => {
        setBooks(response.body as []);
      });
  }, []);

  return (
    <>
    <tr className="tableTitles">
      <th className="colLeft">Name</th>
      <th className="colRight">No. of Pages</th>
    </tr>
    <tr style={{ backgroundColor: '#e1e6ef' }}>
      <td colSpan={3}></td>
    </tr>
    {data.map((item) => (
      <tr key={item.id}>
        <td className="colLeft">{item.title}</td>
        <td className="colRight">{item.pageCount}</td>
        <td className="colRight">
          <Options Book={item} />
        </td>
      </tr>
    ))}
  </>
  );
}