import { create } from "zustand";

const useGlobalStore = create((set) => ({
  notification: "",
  setNotification: (message) => {
    set({ notification: message });
    setTimeout(() => set({ notification: "" }), 3000); // Auto-clear
  },
  
}));

export default useGlobalStore;
