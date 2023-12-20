'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import type { Content } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface Props {
  content?: Content;
  className?: string;
}

export const NoteEditor: React.FC<Props> = ({ className, content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  return <EditorContent className={className} editor={editor} />;
};
