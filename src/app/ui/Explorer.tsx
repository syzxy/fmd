import Link from 'next/link';

export default function Explorer() {
  return (
    <aside className="w-80 bg-gray-200 px-4 py-8 text-sm">
      <ul className="flex flex-col gap-1">
        <li className="p-2">
          <Link className="block" href={''}>
            doc 1
          </Link>
        </li>
        <li className="p-2">
          <Link className="block" href={''}>
            doc 2
          </Link>
        </li>
        <li className="p-2">
          <Link className="block" href={''}>
            doc 3
          </Link>
        </li>
      </ul>
    </aside>
  );
}
