import { useSquid } from '@squidcloud/react';

export default function DeleteBook({ id }: { id: number }) {
  const squidcloud = useSquid();
  const onClick = () => {
    squidcloud
    .api()
    .request('books', 'deleteBook',{},{headers: {}, queryParams: {}, pathParams:{id:id}},'delete')
    .then((response) => {
      alert(`Book ${id} deleted`);      
    })
    .catch((error) => console.error('Failed to update Book', error));
  };

  return (
    <button id="delete" onClick={onClick}>
      Delete Book
    </button>
  );
}