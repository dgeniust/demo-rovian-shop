import apiClient from "./apiClient";

const authService = {
  login: async (email, password) => {
    return apiClient("/login", {
      method: "POST",
      body: { email, password }, // apiClient sẽ tự JSON.stringify cái này
    });
  },
};

export default authService;
