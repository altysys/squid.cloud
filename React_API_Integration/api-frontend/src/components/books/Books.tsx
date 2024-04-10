import CreateBook from './CreateBook.tsx';
import ListBooks from './ListBooks.tsx';

export default function Books() {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ fontSize: '1.2em' }} className="colLeft">
            Books
          </th>
          <th colSpan={2}>
            {/* <CreateBook /> */}
          </th>
        </tr>
      </thead>
      <ListBooks />
    </table>
  );
}