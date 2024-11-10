import { create } from "zustand";

type TradeProps = {
  amount: number;
  profitOrLoss: "profit" | "loss";
  winrate: number;
  pnl: {
    percentage: number;
    value: number;
  };
  totalTrades: number;
  winsAndLosses: {
    wins: number;
    losses: number;
  };
  currentUpdatedInitial: number;
  tradeOrder: number;
};

type BacktestStoreProps = {
  initial: number;
  trades: TradeProps[];
  setTrades: (trades: TradeProps[]) => void;
};

export const useBacktestStore = create<BacktestStoreProps>((set) => ({
  initial: 0,
  trades: [],
  setTrades: (trades: TradeProps[]) => set({ trades }),
}));
