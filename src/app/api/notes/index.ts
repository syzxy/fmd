import 'server-only';
import notes from '@/lib/mock_notes.json';
import { Note } from './notes';

export async function getAllNotes(): Promise<Note[]> {
  return new Promise((res, _) => {
    res(notes.map(({ id, title }) => ({ id, title })));
  });
}

export async function getNote(id: string): Promise<Note | undefined> {
  return new Promise((res) => {
    const note = notes.find((note) => note.id === id);
    res(note);
  });
}
