import { DialogParams } from "@/types";
import { create } from "zustand";

export type DialogStore = {
  params?: DialogParams;
  isOpen: boolean;
  onOpen: (params: DialogParams) => void;
  onClose: () => void;
};

export const useDialog = create<DialogStore>((set) => ({
  params: undefined,
  isOpen: false,
  onOpen: (params) => set({ params, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
