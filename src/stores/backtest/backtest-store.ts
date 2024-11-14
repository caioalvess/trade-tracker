import { create } from "zustand";

type TradeProps = {
  amount: number;
  profitOrLoss: "profit" | "loss";
  profit: number;
  loss: number;
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
  profitFactor: number;
  largestProfit: number;
  largestLoss: number;
  maxConsecWins: number;
  maxConsecLosses: number;
  averageWin: number;
  averageLoss: number;
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
  profitFactorCalc: (lossesSum: number, profitsSum: number) => number;
  addTrade: (
    amount: number,
    profitOrLoss: "profit" | "loss",
    profit: number,
    loss: number
  ) => void;
  undo: () => void;
};

export const useBacktestStore = create<BacktestStoreProps>((set, get) => ({
  /* STATES */

  initial: 0,
  trades: [],
  initialInput: 0,
  profitInput: 0,
  lossInput: 0,

  /* SETS */

  setInitial: (initial: number) => set({ initial }),
  setTrades: (trades: TradeProps[]) => set({ trades }),
  setInitialInput: (initialInput: number) => set({ initialInput }),
  setProfitInput: (profitInput: number) => set({ profitInput }),
  setLossInput: (lossInput: number) => set({ lossInput }),

  /* FUNCTIONS */

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

  profitFactorCalc: (lossesSum: number, profitsSum: number): number => {
    if (lossesSum === 0 && profitsSum === 0) return 0;
    if (lossesSum === 0 && profitsSum !== 0) return 100;
    if (lossesSum !== 0 && profitsSum === 0) return 0;

    return Number((profitsSum / lossesSum).toFixed(2));
  },

  addTrade: (
    amount: number,
    profitOrLoss: "profit" | "loss",
    profit: number,
    loss: number
  ) => {
    const { initial, trades, pnlCalc, profitFactorCalc } = get();

    if (!initial) return;

    const updatedTrades = [...trades, { amount, profitOrLoss, profit, loss }];

    const profitTrades = updatedTrades.filter(
      (trade) => trade.profitOrLoss === "profit"
    );

    const loserTrades = updatedTrades.filter(
      (trade) => trade.profitOrLoss === "loss"
    );

    const winrate = (profitTrades.length / updatedTrades.length) * 100;

    const pnl = pnlCalc(profitOrLoss, amount);

    const profitsSum = updatedTrades.reduce(
      (sum, trade) => sum + trade.amount,
      0
    );

    const lossesSum = loserTrades.reduce((sum, trade) => sum + trade.amount, 0);

    const profitFactor = profitFactorCalc(lossesSum, profitsSum);

    const largestLoss = Math.max(
      0,
      ...updatedTrades
        .filter((trade) => trade.profitOrLoss === "loss")
        .map((trade) => trade.loss)
    );

    const largestProfit = Math.max(
      0,
      ...updatedTrades
        .filter((trade) => trade.profitOrLoss === "profit")
        .map((trade) => trade.profit)
    );

    const maxConsecLosses = updatedTrades.reduce((max, trade, index, array) => {
      if (trade.profitOrLoss === "loss") {
        let consecLosses = 1;
        for (
          let i = index + 1;
          i < array.length && array[i].profitOrLoss === "loss";
          i++
        ) {
          consecLosses++;
        }
        return Math.max(max, consecLosses);
      }
      return max;
    }, 0);

    const maxConsecWins = updatedTrades.reduce((max, trade, index, array) => {
      if (trade.profitOrLoss === "profit") {
        let consecWins = 1;
        for (
          let i = index + 1;
          i < array.length && array[i].profitOrLoss === "profit";
          i++
        ) {
          consecWins++;
        }
        return Math.max(max, consecWins);
      }
      return max;
    }, 0);

    const totalProfit = updatedTrades
      .filter((trade) => trade.profitOrLoss === "profit")
      .reduce((sum, trade) => sum + trade.profit, 0);

    const averageWin = Number((totalProfit / profitTrades.length).toFixed(2));

    const totalLoss = updatedTrades
      .filter((trade) => trade.profitOrLoss === "loss")
      .reduce((sum, trade) => sum + trade.loss, 0);

    const averageLoss = Number((totalLoss / loserTrades.length).toFixed(2));

    const currentUpdatedInitial = !trades.length
      ? profitOrLoss === "profit"
        ? initial + amount
        : initial - amount
      : profitOrLoss === "profit"
      ? trades[trades.length - 1].currentUpdatedInitial + amount
      : trades[trades.length - 1].currentUpdatedInitial - amount;

    const trade: TradeProps = {
      amount,
      profitOrLoss,
      profit,
      loss,
      winrate,
      pnl: pnl,
      totalTrades: trades.length + 1,
      winsAndLosses: {
        wins: profitTrades.length,
        losses: loserTrades.length,
      },
      currentUpdatedInitial,
      tradeOrder: trades.length + 1,
      profitFactor,
      largestLoss,
      largestProfit,
      maxConsecLosses,
      maxConsecWins,
      averageWin,
      averageLoss,
    };

    set((state) => ({ trades: [...state.trades, trade] }));
  },

  undo: () => {
    const { trades } = get();

    if (!trades.length) return;

    const updatedTrades = trades.slice(0, -1);

    set({ trades: updatedTrades });
  },
}));
