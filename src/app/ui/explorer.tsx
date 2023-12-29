import Link from 'next/link';
import { getAllNotes } from '@/app/api/notes';
import { buttonVariants } from '@/components/button';

export default async function Explorer() {
  const notes = await getAllNotes();
  return (
    <aside className="dark:00 w-80 bg-gray-200 px-4 py-8 text-sm">
      <Link className={buttonVariants({ variant: 'outline' })} href={''}>
        Click here
      </Link>
      <ul className="flex flex-col gap-1">
        {notes.map(({ id, title }) => (
          <li className="px-4 py-2 capitalize" key={id}>
            <Link className="block" href={`/notes/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
