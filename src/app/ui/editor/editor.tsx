'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import type { Content } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { MdLink } from './extensions/link';

interface Props {
  content?: Content;
  className?: string;
}

export const NoteEditor: React.FC<Props> = ({ className, content }) => {
  const editor = useEditor({
    extensions: [StarterKit, MdLink],
    content,
    // onUpdate({ editor, transaction }) {
    //   const jsonObject = editor.getJSON();
    //   const htmlString = editor.getHTML();
    //   const plainText = editor.getText();
    //   console.log({ jsonObject, htmlString, plainText, transaction });
    // },
  });

  return <EditorContent className={className} editor={editor} />;
};
