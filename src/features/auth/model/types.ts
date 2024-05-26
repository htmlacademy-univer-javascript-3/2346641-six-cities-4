export type AuthState = {
  user: User | null;
  token: string | null;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
};

export type ResponseUser = User & { token: string };

export type LoginData = {
  email: string;
  password: string;
};
