import { NoteEditor } from './ui/editor/editor';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl">
      <NoteEditor className="prose dark:prose-invert lg:prose-xl" />
    </div>
  );
}
