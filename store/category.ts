import { create } from "zustand";

interface ICategory {
    activeId: number;
    setActiveId(activeId: number): void;
}

export const useCategoryStore = create<ICategory>((set) => ({
    activeId: 1,
    setActiveId(activeId: number) {
        set({ activeId });
    }
}));