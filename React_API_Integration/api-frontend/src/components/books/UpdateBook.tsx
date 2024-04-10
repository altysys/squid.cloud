import React, { Dispatch, SetStateAction } from 'react';
import { useSquid } from '@squidcloud/react';
type EventObj = { value: string }; // Used for form event data access

export default function UpdateBook({
  id,
  setOpen,
}: {
  id: number;
  pageCount: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  
  const squidcloud = useSquid();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    squidcloud
      .api()
      .request('books', 'updateBook', { id: id,pageCount:  Number((e.target as unknown as Array<EventObj>)[0].value)},
      {headers: {}, queryParams: {}, pathParams:{id:id}},'put')
      .then((response) => {
        alert('Book updated successfully');      
      })
      .catch((error) => console.error('Failed to update Book', error));
     setOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="pageCount" type="number" placeholder="No. of Pages" />
      <input type="submit" value="Update Book" />
    </form>
  );
}