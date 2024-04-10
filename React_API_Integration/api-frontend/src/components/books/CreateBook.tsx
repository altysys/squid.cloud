import { useCollection } from '@squidcloud/react';

// Define your type
type Book = { id: string; email: string; age: number };

export default function CreateBook() {
  const BookCollection = useCollection<Book>('Books');
  const insert = () => {
    const BookId = crypto.randomUUID();
    const email = `${BookId}@email.com`;
    BookCollection.doc(BookId).insert({
      id: BookId,
      email,
      age: Math.ceil(Math.random() * 100),
    });
  };
  return (
    <>
      <button id="create" onClick={insert}>
        Insert new Book
      </button>
    </>
  );
}