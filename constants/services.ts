export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const AUTH_URLS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh-token`,
};

export const DEVICES_URLS = {
  getDevices: (organizationId: string) =>
    `${API_BASE_URL}/organizations/${organizationId}/devices`,
};
