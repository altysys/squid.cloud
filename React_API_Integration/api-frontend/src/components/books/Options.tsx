import { Dialog } from '@mui/material';
import { useState } from 'react';
import DeleteBook from './DeleteBook.tsx';
import UpdateBook from './UpdateBook.tsx';

type Book = { id: number; title: string; pageCount: number };

export default function Options({ Book }: { Book: Book }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}
    >
      <button id="options" onClick={() => setOpen(!open)}>
        ...
      </button>
      <Dialog open={open}>
        <div id="dialogContainer">
          <div id="dialogHeader">Book {Book.id}</div>
          <UpdateBook id={Book.id} pageCount={Book.pageCount} setOpen={setOpen} />
          <DeleteBook id={Book.id} />
          <button id="close" onClick={() => setOpen(!open)}>
            X
          </button>
        </div>
      </Dialog>
    </div>
  );
}