import { notFound } from 'next/navigation';
import { getNote } from '@/app/api/notes';
import { NoteEditor } from '@/app/ui/editor/editor';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const page = await getNote(params.id);

  if (page === undefined) {
    notFound();
  }

  return (
    <article className="prose mx-auto dark:prose-invert">
      <h1 className="capitalize">{page.title}</h1>
      <hr />
      <NoteEditor content={page.body} />
    </article>
  );
}
