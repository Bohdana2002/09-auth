import { Note, NoteData, NoteResponse } from "@/types/note";
import { api } from "./api";
import { User } from "@/types/user";

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
export interface RegisterUserData {
  email: string;
  password: string;
}
export const register = async (userData: RegisterUserData): Promise<User> => {
  const { data } = await api.post<User>("/auth/register", userData);
  return data;
};
export interface LoginUserData {
  email: string;
  password: string;
}
export const login = async (loginData: LoginUserData) => {
  const { data } = await api.post<User>("/auth/login", loginData);
  return data;
};

interface CheckSessionRequest {
  success: boolean;
}
export const checkSession = async (): Promise<boolean> => {
  try {
    const res = await api.get<CheckSessionRequest>("/auth/session");
    return res.data.success;
  } catch {
    return false;
  }
};

export const getMe = async () => {
  const { data } = await api.get<User>("users/me");
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
};

export interface UpdateUserRequest {
  username: string;
}
export const updateMe = async (payload: UpdateUserRequest) => {
  const { data } = await api.put<User>("users/me", payload);
  return data;
};
