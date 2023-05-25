export const Transaction = {
  List: [
    {
      type: "Deposit",
      amount: 1000000,
      date: "2021-01-02 10:30:00",
    },

    {
      type: "Witdraw",
      amount: 1000000,
      date: "2021-01-02 12:30:00",
    },

    {
      type: "Deposit",
      amount: 1000000,
      date: "2021-01-02 13:30:00",
    },

    {
      type: "Witdraw",
      amount: 6000.5,
      date: "2021-01-02 14:30:00",
    },

    {
      type: "Deposit",
      amount: 10000000,
      date: "2021-01-02 15:30:00",
    },

    {
      type: "Witdraw",
      amount: 100.25,
      date: "2021-01-02 16:30:00",
    },

    {
      type: "Deposit",
      amount: 160.5,
      date: "2021-01-02 17:30:00",
    },

    {
      type: "Witdraw",
      amount: 1000.5,
      date: "2021-01-02 18:30:00",
    },

    {
      type: "Deposit",
      amount: 1000000,
      date: "2021-01-02 10:30:00",
    },

    {
      type: "Witdraw",
      amount: 1000000,
      date: "2021-01-02 12:30:00",
    },

    {
      type: "Deposit",
      amount: 1000000,
      date: "2021-01-02 13:30:00",
    },

    {
      type: "Witdraw",
      amount: 6000.5,
      date: "2021-01-02 14:30:00",
    },

    {
      type: "Deposit",
      amount: 1000000,
      date: "2021-01-02 10:30:00",
    },

    {
      type: "Witdraw",
      amount: 1000000,
      date: "2021-01-02 12:30:00",
    },

    {
      type: "Deposit",
      amount: 1000000,
      date: "2021-01-02 13:30:00",
    },

    {
      type: "Witdraw",
      amount: 6000.5,
      date: "2021-01-02 14:30:00",
    },
  ],
  count: 16,
};

export const Stock = {
  wallet: [
    {
      symbol: "KBANK",
      lastPrice: 90.0,
      volume: 100,
      AVGPurchase: 100.0,
      get totalcost() {
        return this.volume * this.AVGPurchase;
      },
      get UnrealizedPL() {
        return (this.lastPrice - this.AVGPurchase) * this.volume;
      },
      get UnrealizedPLPercent() {
        return ((this.lastPrice - this.AVGPurchase) * this.volume) / 100;
      },
      percentChange: -2.0,
      get marketValue() {
        return this.volume * this.lastPrice;
      },
    },

    {
      symbol: "SCB",
      lastPrice: 140.0,
      volume: 300,
      AVGPurchase: 120.0,
      get totalcost() {
        return this.volume * this.AVGPurchase;
      },
      get UnrealizedPL() {
        return (this.lastPrice - this.AVGPurchase) * this.volume;
      },
      get UnrealizedPLPercent() {
        return ((this.lastPrice - this.AVGPurchase) * this.volume) / 100;
      },
      percentChange: +1.4,
      get marketValue() {
        return this.volume * this.lastPrice;
      },
    },

    {
      symbol: "AOT",
      lastPrice: 60.0,
      volume: 1000,
      AVGPurchase: 70.0,
      get totalcost() {
        return this.volume * this.AVGPurchase;
      },
      get UnrealizedPL() {
        return (this.lastPrice - this.AVGPurchase) * this.volume;
      },
      get UnrealizedPLPercent() {
        return ((this.lastPrice - this.AVGPurchase) * this.volume) / 100;
      },
      percentChange: -1.4,
      get marketValue() {
        return this.volume * this.lastPrice;
      },
    },

    {
      symbol: "BANPU",
      lastPrice: 50.0,
      volume: 10,

      AVGPurchase: 50.0,
      get totalcost() {
        return this.volume * this.AVGPurchase;
      },

      get UnrealizedPL() {
        return (this.lastPrice - this.AVGPurchase) * this.volume;
      },

      get UnrealizedPLPercent() {
        return ((this.lastPrice - this.AVGPurchase) * this.volume) / 100;
      },
      percentChange: 0.0,
      get marketValue() {
        return this.volume * this.lastPrice;
      },
    },

    {
      symbol: "CPALL",
      lastPrice: 200.0,
      volume: 600,
      AVGPurchase: 100.0,
      get totalcost() {
        return this.volume * this.AVGPurchase;
      },
      get UnrealizedPL() {
        return (this.lastPrice - this.AVGPurchase) * this.volume;
      },
      get UnrealizedPLPercent() {
        return ((this.lastPrice - this.AVGPurchase) * this.volume) / 100;
      },
      percentChange: +100.0,
      get marketValue() {
        return this.volume * this.lastPrice;
      },
    },
  ],
  count: 5,
};

export const Account = {
  account: [
    {
      ID: "Anonymous101",
      Broker: "KBANK",
      Username: "Pongsakorn",
      PhoneNumber: "0812345678",
      EmailAddress: "Pongsakorn@gail.com",
      LineAvailable: 1000000,
      CreditLimit: 1000000,
    },
  ],
  creditlimitCount: 1,
};

export const Device = {
  Login: [
    {
      device: "Chrome",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 10:30:00",
    },

    {
      device: "Iphone",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 12:30:00",
    },

    {
      device: "Macbook",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 13:30:00",
    },

    {
      device: "Safari",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 14:30:00",
    },

    {
      device: "Chrome",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 15:30:00",
    },
    {
      device: "Chrome",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 15:30:00",
    },
    {
      device: "Chrome",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 15:30:00",
    },
    {
      device: "Chrome",
      IPAddress: "184.22.212.234",
      date: "2021-01-02 15:30:00",
    },
  ],
  count: 8,
};