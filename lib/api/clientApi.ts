import { Note, NoteData } from "@/types/note";
import { NoteResponse } from "../api";
import { api } from "./api";
import { User } from "@/types/user";

/* 
!fetchNotes
!fetchNoteById
!createNote
!deleteNote
register
login
logout
checkSession
getMe
updateMe
*/
export const fetchNotes = async (
  query: string,
  page: number,
  perPage: number,
  tag?: string,
): Promise<NoteResponse> => {
  const { data } = await api.get<NoteResponse>("/notes", {
    params: { search: query, page, perPage, tag },
  });
  return data;
};

export const fetchNoteById = async (noteId: Note["id"]): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${noteId}`);
  return data;
};

export const createNote = async (noteData: NoteData): Promise<Note> => {
  const { data } = await api.post<Note>("/notes", noteData);
  return data;
};

export const deleteNote = async (id: Note["id"]): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
};
export interface RegisterRequest {
  email: string;
  password: string;
}
export const register = async (userData: RegisterRequest): Promise<User> => {
  const { data } = await api.post<User>("/auth/register", userData);
  return data;
};
