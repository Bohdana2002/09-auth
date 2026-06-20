import { User } from "@/types/user";
import { api } from "./api";
import { Note, NoteResponse } from "@/types/note";
import { cookies } from "next/headers";

export const fetchNoteById = async (noteId: Note["id"]): Promise<Note> => {
  const cookieStore = await cookies();
  const { data } = await api.get<Note>(`/notes/${noteId}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
export const fetchNotes = async (
  query: string,
  page: number,
  perPage: number,
  tag?: string,
): Promise<NoteResponse> => {
  const cookieStore = await cookies();
  const { data } = await api.get<NoteResponse>("/notes", {
    params: { search: query, page, perPage, tag },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
export const getMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await api.get<User>("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

export const checkSession = async () => {
  const cookieStore = await cookies();
  const res = await api.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
};
