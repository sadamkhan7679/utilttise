const TOKEN_KEY = "access_token";

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);
    return token ? `Bearer ${token}` : null;
  }
  return null;
};

export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};
