import Link from 'next/link';
import { getAllNotes } from '@/app/api/notes';
import { buttonVariants } from '@/components/button';
import { Pencil2Icon } from '@radix-ui/react-icons';

export default async function Explorer() {
  const notes = await getAllNotes();
  return (
    <aside className="dark:00 w-80 bg-gray-200 px-4 py-8 text-sm">
      <Link className={buttonVariants({ justify: 'start', variant: 'ghost', flow: 'block' })} href={'/'}>
        <Pencil2Icon className="mr-2" />
        New note
      </Link>
      <ul className="flex flex-col gap-1">
        {notes.map(({ id, title }) => (
          <li className="capitalize" key={id}>
            <Link
              className={buttonVariants({ justify: 'start', variant: 'ghost', flow: 'block' })}
              href={`/notes/${id}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
