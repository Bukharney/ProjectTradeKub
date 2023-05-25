const User = [{ id: 1, name: "Document 1" }];

const Account = [{ id: 2, name: "Document 2" }];

const Broker = [{ id: 3, name: "Document 3" }];

const BankTransition = [{ id: 4, name: "Document 1" }];

const StockOrder = [{ id: 5, name: "Document 1" }];

const StockTransaction = [{ id: 5, name: "Document 1" }];

const Login_Logout = [{ id: 6, name: "Document 1" }];

const CompanyDetails = [{ id: 7, name: "Document 1" }];

const Turnover = [{ id: 8, name: "Document 1" }];

const Divident = [{ id: 9, name: "Document 1" }];

const News = [{ id: 10, name: "Document 1" }];

const userColumns = Object.keys(User[0]);
const accountColumns = Object.keys(Account[0]);
const brokerColumns = Object.keys(Broker[0]);
const bankTransitionColumns = Object.keys(BankTransition[0]);
const stockOrderColumns = Object.keys(StockOrder[0]);
const stockTransactionColumns = Object.keys(StockTransaction[0]);
const loginLogoutColumns = Object.keys(Login_Logout[0]);
const companyDetailsColumns = Object.keys(CompanyDetails[0]);
const turnoverColumns = Object.keys(Turnover[0]);
const dividendColumns = Object.keys(Divident[0]);
const newsColumns = Object.keys(News[0]);

const tablesColumns = [
  userColumns,
  accountColumns,
  brokerColumns,
  bankTransitionColumns,
  stockOrderColumns,
  stockTransactionColumns,
  loginLogoutColumns,
  companyDetailsColumns,
  turnoverColumns,
  dividendColumns,
  newsColumns,
];

export { tablesColumns };

const userRows = User.map((document) => Object.values(document));
const accountRows = Account.map((document) => Object.values(document));
const brokerRows = Broker.map((document) => Object.values(document));
const bankTransitionRows = BankTransition.map((document) =>
  Object.values(document)
);
const stockOrderRows = StockOrder.map((document) => Object.values(document));
const stockTransactionRows = StockTransaction.map((document) =>
  Object.values(document)
);
const loginLogoutRows = Login_Logout.map((document) => Object.values(document));
const companyDetailsRows = CompanyDetails.map((document) =>
  Object.values(document)
);
const turnoverRows = Turnover.map((document) => Object.values(document));
const dividendRows = Divident.map((document) => Object.values(document));
const newsRows = News.map((document) => Object.values(document));

const tablesRows = [
  userRows,
  accountRows,
  brokerRows,
  bankTransitionRows,
  stockOrderRows,
  stockTransactionRows,
  loginLogoutRows,
  companyDetailsRows,
  turnoverRows,
  dividendRows,
  newsRows,
];

export { tablesRows };
