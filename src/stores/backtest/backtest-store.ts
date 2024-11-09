import { create } from "zustand";

type BacktestStoreProps = {
  test: number;
  setTest: (test: number) => void;
};

export const useBacktestStore = create<BacktestStoreProps>((set) => ({
  test: 1,
  setTest: (test) => set({ test }),
}));
