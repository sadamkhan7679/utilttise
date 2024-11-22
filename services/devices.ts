import { DEVICES_URLS } from "@/constants/services";
import apiClient from "./apiClient";

export const getDeviceProfile = async (organizationId: string) => {
  const url = DEVICES_URLS.getDevices(organizationId);

  const proxiedUrl = url;

  try {
    const response = await apiClient.get(proxiedUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching device profile:", error);
    throw error;
  }
};
