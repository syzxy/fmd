import Link from 'next/link';
import { getAllNotes } from '@/app/api/notes';

export default async function Explorer() {
  const notes = await getAllNotes();
  return (
    <aside className="w-80 bg-gray-200 px-4 py-8 text-sm">
      <ul className="flex flex-col gap-1">
        {notes.map(({ id, title }) => (
          <li className="p-2 capitalize" key={id}>
            <Link className="block" href={`/notes/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
