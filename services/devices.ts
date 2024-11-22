import { DEVICES_URLS } from "@/constants/services";
import apiClient from "./apiClient";

const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

export const getDeviceProfile = async (organizationId: string) => {
  const url = DEVICES_URLS.getDevices(organizationId);

  const proxiedUrl = corsProxyUrl + url;

  try {
    const response = await apiClient.get(proxiedUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching device profile:", error);
    throw error;
  }
};
