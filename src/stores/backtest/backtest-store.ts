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
  setInitial: (initial: number) => void;
  trades: TradeProps[];
  setTrades: (trades: TradeProps[]) => void;

  initialInput: number;
  setInitialInput: (initialInput: number) => void;
  profitInput: number;
  setProfitInput: (profitInput: number) => void;
  lossInput: number;
  setLossInput: (lossInput: number) => void;

  pnlCalc: (
    profitOrLoss: "profit" | "loss",
    amount: number
  ) => { percentage: number; value: number };
  addTrade: (amount: number, profitOrLoss: "profit" | "loss") => void;
};

export const useBacktestStore = create<BacktestStoreProps>((set, get) => ({
  initial: 0,
  setInitial: (initial: number) => set({ initial }),
  trades: [],
  setTrades: (trades: TradeProps[]) => set({ trades }),

  initialInput: 0,
  setInitialInput: (initialInput: number) => set({ initialInput }),
  profitInput: 0,
  setProfitInput: (profitInput: number) => set({ profitInput }),
  lossInput: 0,
  setLossInput: (lossInput: number) => set({ lossInput }),

  pnlCalc: (profitOrLoss: "profit" | "loss", amount: number) => {
    const { initial, trades } = get();

    if (!trades.length) {
      const pnlValue = profitOrLoss === "profit" ? amount : -amount;

      const pnlPercentage =
        profitOrLoss === "profit"
          ? (amount / initial) * 100
          : -((amount / initial) * 100);

      const pnl = {
        percentage: pnlPercentage,
        value: pnlValue,
      };

      return pnl;
    }

    const pnlValue =
      profitOrLoss === "profit"
        ? trades[trades.length - 1].pnl.value + amount
        : trades[trades.length - 1].pnl.value - amount;

    const pnlPercentage =
      profitOrLoss === "profit"
        ? (amount / initial) * 100 + trades[trades.length - 1].pnl.percentage
        : trades[trades.length - 1].pnl.percentage - (amount / initial) * 100;

    const pnl = {
      percentage: pnlPercentage,
      value: pnlValue,
    };

    return pnl;
  },

  addTrade: (amount: number, profitOrLoss: "profit" | "loss") => {
    const { initial, trades, pnlCalc } = get();

    if (!initial) return;

    const updatedTrades = [...trades, { amount, profitOrLoss }];

    const profitTrades = updatedTrades.filter(
      (trade) => trade.profitOrLoss === "profit"
    );

    const loserTrades = updatedTrades.filter(
      (trade) => trade.profitOrLoss === "loss"
    );

    const winrate = (profitTrades.length / updatedTrades.length) * 100;

    const pnl = pnlCalc(profitOrLoss, amount);

    const currentUpdatedInitial = !trades.length
      ? profitOrLoss === "profit"
        ? initial + amount
        : initial - amount
      : profitOrLoss === "profit"
      ? trades[trades.length - 1].currentUpdatedInitial + amount
      : trades[trades.length - 1].currentUpdatedInitial - amount;

    const trade = {
      amount,
      profitOrLoss,
      winrate,
      pnl: pnl,
      totalTrades: trades.length + 1,
      winsAndLosses: {
        wins: profitTrades.length,
        losses: loserTrades.length,
      },
      currentUpdatedInitial,
      tradeOrder: trades.length + 1,
    };

    set((state) => ({ trades: [...state.trades, trade] }));
  },
}));
