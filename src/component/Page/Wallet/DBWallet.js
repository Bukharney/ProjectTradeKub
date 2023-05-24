export const Transaction = {
    List: [
      {
        side: "Buy",
        symbol: "KBANK",
        volume: 10000,
        price: 100.53,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-01-02 10:30:00",
      },
  
      {
        side: "Sell",
        symbol: "SCB",
        volume: 30000,
        price: 120.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-01-11 09:00:00",
      },
  
      {
        side: "Buy",
        symbol: "AOT",
        volume: 1000,
        price: 70.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-01-01 10:00:00",
      },
  
      {
        side: "Sell",
        symbol: "BANPU",
        volume: 10,
        price: 50.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-01-25 10:30:00",
      },
  
      {
        side: "Buy",
        symbol: "CPALL",
        volume: 600,
        price: 100.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-02-01 10:00:00",
      },
  
      {
        side: "Buy",
        symbol: "PTT",
        volume: 10000,
        price: 100.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-11-01 11:00:00",
      },
  
      {
        side: "Buy",
        symbol: "SCC",
        volume: 700,
        price: 100.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-01-01 03:00:00",
      },
  
      {
        side: "Buy",
        symbol: "SCC",
        volume: 700,
        price: 100.0,
        get total() {
          return this.volume * this.price;
        },
        date: "2021-01-01 03:00:00",
      },
    ],
    count: 8,
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
        LineAvailable:1000000,
        CreditLimit: 1000000,
      },
    ], creditlimitCount: 1,
  };