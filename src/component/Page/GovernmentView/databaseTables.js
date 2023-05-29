import {
  UserData,
  AccountData,
  BrokerData,
  StockOrderData,
  StockTransData,
  BankTransData,
  TurnoverData,
  LogInOutData,
  CompanyData,
  DividentData,
  NewsData,
} from "./allData.js";

let view_UserData = [{ NULL: "NULL" }];
let view_AccountData = [{ NULL: "NULL" }];
let view_BrokerData = [{ NULL: "NULL" }];
let view_StockOrderData = [{ NULL: "NULL" }];
let view_StockTransData = [{ NULL: "NULL" }];
let view_BankTransData = [{ NULL: "NULL" }];
let view_TurnoverData = [{ NULL: "NULL" }];
let view_LogInOutData = [{ NULL: "NULL" }];
let view_CompanyData = [{ NULL: "NULL" }];
let view_DividentData = [{ NULL: "NULL" }];
let view_NewsData = [{ NULL: "NULL" }];

let roleIndex_inDB = 0;
export const GettingRoleIndex = ({ roleIndexGet }) => {
  roleIndex_inDB = roleIndexGet;
};
let ViewerLabel = "";

let search = "";
let search2 = "";
export const SearchGeting = ({ ViewerLabelGet }) => {
  //search = searchGet;
  //search2 = searchGet2;
  ViewerLabel = ViewerLabelGet;
};

/*
 if (roleIndex_inDB == 0) {
  //search account of the user by account_id, if not search, show all of the user's
  view_AccountData = (search === '' ?
    AccountData.filter(item => item.user_id === ViewerLabel)
    :
    AccountData.filter(item => item.user_id === ViewerLabel && item.account_id === search)
  );

  //search user ,but technically show only 1 row (the user)
  view_UserData = UserData.filter(item => view_AccountData.find(accountItem => accountItem.user_id === item.user_id));

  //search broker of the user by broker_id, if not search, show all of the user's
  view_BrokerData = (search === '' ?
    BrokerData.filter(item =>
      view_AccountData.some(accountItem =>
        accountItem.broker_id === item.broker_id))
    :
    BrokerData.filter(item =>
      view_AccountData.some(accountItem =>
        (accountItem.broker_id === item.broker_id)
        && (search === item.broker_id)
      ))
  );

  //search stock order of the user by order date, if not search, show all of the user's
  view_StockOrderData = (search === '' ?
    StockOrderData.filter(item =>
      view_AccountData.some(accountItem =>
        accountItem.account_id === item.account_id))
    :
    StockOrderData.filter(item =>
      view_AccountData.some(accountItem =>
        (accountItem.account_id === item.account_id)
        && (search === item.order_datetime)
      ))
  );

  //search stock transaction of the user by datetime, if not search, show all of the user's
  view_StockTransData = (search === '' ?
    StockTransData.filter(item => view_StockOrderData.some(order => order.order_id === item.order_id))
    :
    StockTransData.filter(item => view_StockOrderData.some((order => order.order_id === item.order_id)
      && (search === item.transaction_datetime)
    ))
  );

  //search bank transaction of the user by datetime, if not search, show all of the user's
  view_BankTransData = (search === '' ?
    BankTransData.filter(item => view_AccountData.some(account => account.account_id === item.account_id))
    :
    BankTransData.filter(item => view_AccountData.some((account => account.account_id === item.account_id)
      && (search === item.transaction_datetime)
    ))
  );

  //search stock turnover by stock_symbol and(or) datetime, if not search, show ALL (anyone can view this all btw)
  view_TurnoverData = (search === '' ?
    (search2 === '' ?
      TurnoverData
      :
      TurnoverData.filter(item => item.datetime === search2))
    :
    (search2 === '' ?
      TurnoverData.filter(item => item.stock_symbol === search)
      :
      TurnoverData.filter(item => item.stock_symbol === search && item.datetime === search2)
    )
  );


  //search login_logout by login and(or) logout datetime, if not search, show all of the user's
  view_LogInOutData = (search === '' ?
    (search2 === '' ?
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id))
      :
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.logout_datetime === search2))
    :
    (search2 === '' ?
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.login_datetime === search)
      :
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.logout_datetime === search2 && item.login_datetime === search)
    )

  );

  //search company by company name, if not search, show ALL (anyone can view this all btw)
  view_CompanyData = (search === '' ? CompanyData : CompanyData.filter(item => item.company_name === search));

  //search divident by account of the user and(or) datetime, if not search, show all the user's
  view_DividentData = (search === '' ?
    (search2 === '' ?
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id))
      :
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.datetime === search2)
    )
    :
    (search2 === '' ?
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.account_id === search)
      :
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.account_id === search && item.datetime === search2)
    )
  );

  //search news by stock_symbol and(or) news_datetime, if not search, show ALL (anyone can view this all btw)
  view_NewsData = (search === '' ?
    (search2 === '' ?
      NewsData
      :
      NewsData.filter(item => item.datetime === search2)
    )
    :
    (search2 === '' ?
      NewsData.filter(item => item.stock_symbol === search)
      :
      NewsData.filter(item => item.stock_symbol === search && item.datetime === search2)
    )
  );

}//<===user

else if (roleIndex_inDB == 1) {
  //search account that rigistered with the broker by account_id, if not search, show all of the broker's
  view_AccountData = (search === '' ?
    AccountData.filter(item => item.broker_id == ViewerLabel)
    :
    AccountData.filter(item => item.broker_id === ViewerLabel && item.account === search)
  );

  //search user that has account with the broker by user_id, if not search, show all of the broker's
  view_UserData = (search === '' ?
    UserData.filter(item => view_AccountData.find(accountItem => accountItem.user_id === item.user_id))
    :
    UserData.filter(item => view_AccountData.find(accountItem => accountItem.user_id === item.user_id) && search === item.user_id)
  );

const Account = [
  { id: 1, name: "Document 1" },
  { id: 2, name: "Document 2" },
  { id: 3, name: "Document 3" }
];

const Broker = [
  { id: 1, name: "Document 1" },
  { id: 2, name: "Document 2" },
  { id: 3, name: "Document 3" }
];

const BankTransition = [
  { id: 1, name: "Document 1" },
  { id: 2, name: "Document 2" },
  { id: 3, name: "Document 3" }
];

const StockOrder = [
  { id: 1, name: "Document 1" },
  { id: 2, name: "Document 2" },
  { id: 3, name: "Document 3" }
];

  //search broker by broker id, but technically show only 1 row or not show
  view_BrokerData = (search === '' ?
    BrokerData.filter(item => item.broker_id === ViewerLabel)
    :
    BrokerData.filter(item => item.broker_id === ViewerLabel && search === ViewerLabel)
  );

  //search stock order of the accounts of the broker by account_id and(or) order_date, if not search, show all of the broker's
  view_StockOrderData = (search === '' ?
    (search2 === '' ?
      StockOrderData.filter(item => view_AccountData.find(AD => AD.account_id === item.account_id))
      :
      StockOrderData.filter(item => view_AccountData.find(AD => AD.account_id === item.account_id) && item.order_date === search2)
    )
    :
    (search2 === '' ?
      StockOrderData.filter(item => view_AccountData.find(AD => AD.account_id === item.account_id) && item.account_id === search)
      :
      StockOrderData.filter(item => view_AccountData.find(AD => AD.account_id === item.account_id)
        && item.account_id === search && item.order_datetime === search2)
    )
  );

  //search stock transaction of accounts that belong to the broker by account_id and(or) datetime, if not search, show all of the broker's each user
  view_StockTransData = (search === '' ?
    (search2 === '' ?
      StockTransData.filter(item => view_StockOrderData.some(order => order.order_id === item.order_id))
      :
      StockTransData.filter(item => view_StockOrderData.some(order => order.order_id === item.order_id)
        && item.transaction_datetime === search2)
    )
    :
    (search2 === '' ?
      StockTransData.filter(item => view_StockOrderData.some((order => order.order_id === item.order_id)
        && (search === item.account_id)))
      :
      StockTransData.filter(item => view_StockOrderData.some((order => order.order_id === item.order_id)
        && (search === item.account_id)) && search2 === item.transaction_datetime)
    )
  );

  //search bank transaction of the accounts that belongs to the broker by account_id and(or) datetime, if not search, show all of the broker's
  view_BankTransData = (search === '' ?
    (search2 === '' ?
      BankTransData.filter(item => view_AccountData.some(account => account.account_id === item.account_id))
      :
      BankTransData.filter(item => view_AccountData.some(account => account.account_id === item.account_id)&&item.transaction_datetime === search)
  )
    :
    (search2 === ''?
    BankTransData.filter(item => view_AccountData.some((account => account.account_id === item.account_id)
      && (search === item.account_id)))
      :
      BankTransData.filter(item => view_AccountData.some((account => account.account_id === item.account_id)
      && (search === item.account_id && search2 === item.transaction_datetime))
    ))
  );

  //search stock turnover by stock_symbol and(or) datetime, if not search, show ALL (anyone can view this all btw)
  view_TurnoverData = (search === '' ?
    (search2 === '' ?
      TurnoverData
      :
      TurnoverData.filter(item => item.datetime === search2))
    :
    (search2 === '' ?
      TurnoverData.filter(item => item.stock_symbol === search)
      :
      TurnoverData.filter(item => item.stock_symbol === search && item.datetime === search2)
    )
  );

  //search login_logout of users of the broker by login and(or) logout datetime, if not search, show all of the broker's users
  view_LogInOutData = (search === '' ?
    (search2 === '' ?
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id))
      :
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.logout_datetime === search2))
    :
    (search2 === '' ?
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.login_datetime === search)
      :
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.logout_datetime === search2 && item.login_datetime === search)
    )

  );

  //search company by company name, if not search, show ALL (anyone can view this all btw)
  view_CompanyData = (search === '' ? CompanyData : CompanyData.filter(item => item.company_name === search));

  //search divident by account of the broker and(or) datetime, if not search, show all the broker's
  view_DividentData = (search === '' ?
    (search2 === '' ?
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id))
      :
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.datetime === search2)
    )
    :
    (search2 === '' ?
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.account_id === search)
      :
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.account_id === search && item.datetime === search2)
    )
  );

  //search news by stock_symbol and(or) news_datetime, if not search, show ALL (anyone can view this all btw)
  view_NewsData = (search === '' ?
    (search2 === '' ?
      NewsData
      :
      NewsData.filter(item => item.datetime === search2)
    )
    :
    (search2 === '' ?
      NewsData.filter(item => item.stock_symbol === search)
      :
      NewsData.filter(item => item.stock_symbol === search && item.datetime === search2)
    )
  );
}//broker
else if (roleIndex_inDB == 2 || roleIndex_inDB == 3) { 
  //search account by account_id, if not search, show ALL
  view_AccountData = (search === '' ?
    AccountData
    :
    AccountData.filter(item => item.account === search)
  );

  //search user by user_id, if not search, show ALL
  view_UserData = (search === ''?
    UserData
    :
    UserData.filter(item => search === item.user_id)
  );

  //search broker by broker_id, if not search, show ALL
  view_BrokerData = (search === '' ?
    BrokerData
    :
    BrokerData.filter(item =>search === item.broker_id)
  );

  //search stock order by order date, if not search, show ALL
  view_StockOrderData = (search === '' ?
    StockOrderData
    :
    StockOrderData.filter(item =>search === item.order_datetime)
  );

  //search stock transaction by datetime, if not search, show ALL
  view_StockTransData = (search === '' ?
    StockTransData.filter(item => view_StockOrderData.some(order => order.order_id === item.order_id))
    :
    StockTransData.filter(item => view_StockOrderData.some((order => order.order_id === item.order_id)
      && (search === item.transaction_datetime)
    ))
  );

  //search bank transaction of the user by datetime, if not search, show all of the user's
  view_BankTransData = (search === '' ?
    BankTransData.filter(item => view_AccountData.some(account => account.account_id === item.account_id))
    :
    BankTransData.filter(item => view_AccountData.some((account => account.account_id === item.account_id)
      && (search === item.transaction_datetime)
    ))
  );

  //search stock turnover by stock_symbol and(or) datetime, if not search, show ALL (anyone can view this all btw)
  view_TurnoverData = (search === '' ?
    (search2 === '' ?
      TurnoverData
      :
      TurnoverData.filter(item => item.datetime === search2))
    :
    (search2 === '' ?
      TurnoverData.filter(item => item.stock_symbol === search)
      :
      TurnoverData.filter(item => item.stock_symbol === search && item.datetime === search2)
    )
  );

  //search login_logout by login and(or) logout datetime, if not search, show all of the user's
  view_LogInOutData = (search === '' ?
    (search2 === '' ?
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id))
      :
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.logout_datetime === search2))
    :
    (search2 === '' ?
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.login_datetime === search)
      :
      LogInOutData.filter(item => view_UserData.find(element => element.user_id === item.user_id) && item.logout_datetime === search2 && item.login_datetime === search)
    )

  );

  //search company by company name, if not search, show ALL (anyone can view this all btw)
  view_CompanyData = (search === '' ? CompanyData : CompanyData.filter(item => item.company_name === search));

  //search divident by account of the user and(or) datetime, if not search, show all the user's
  view_DividentData = (search === '' ?
    (search2 === '' ?
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id))
      :
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.datetime === search2)
    )
    :
    (search2 === '' ?
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.account_id === search)
      :
      DividentData.filter(item => view_AccountData.find(element => element.account_id === item.account_id) && item.account_id === search && item.datetime === search2)
    )
  );

  //search news by stock_symbol and(or) news_datetime, if not search, show ALL (anyone can view this all btw)
  view_NewsData = (search === '' ?
    (search2 === '' ?
      NewsData
      :
      NewsData.filter(item => item.datetime === search2)
    )
    :
    (search2 === '' ?
      NewsData.filter(item => item.stock_symbol === search)
      :
      NewsData.filter(item => item.stock_symbol === search && item.datetime === search2)
    )
  );
}//government or admin can view all
else if (roleIndex_inDB == 4) { }//company
*/

export const SearchFunction = () => {
  view_TurnoverData = TurnoverData;
  view_CompanyData = CompanyData;
  view_NewsData = NewsData

  if (roleIndex_inDB === 0) {
    view_UserData = UserData.filter((item) => item.name === ViewerLabel);
    view_AccountData = AccountData.filter((item) =>
      view_UserData.find((userItem) => userItem.id === item.user_id)
    );
    view_BrokerData = BrokerData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.broker_id === item.id)
    );
    view_StockOrderData = StockOrderData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.id === item.account_id)
    );
    view_StockTransData = StockTransData.filter((item) =>
      view_StockOrderData.find((orderItem) => orderItem.id === item.order_id)
    );
    view_BankTransData = BankTransData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.id === item.account_id)
    );
    view_LogInOutData = LogInOutData.filter((item) =>
      view_UserData.find((userItem) => userItem.id === item.id)
    );
    view_DividentData = DividentData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.id === item.account_id)
    );
  } else if (roleIndex_inDB === 1) {
    view_BrokerData = BrokerData.filter((item) => item.name === ViewerLabel);
    view_AccountData = AccountData.filter((item) =>
      view_BrokerData.find((BItem) => BItem.id === item.broker_id)
    );
    view_UserData = UserData.filter((item) =>
      view_AccountData.find((AItem) => AItem.user_id === item.id)
    );
    view_StockOrderData = StockOrderData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.id === item.account_id)
    );
    view_StockTransData = StockTransData.filter((item) =>
      view_StockOrderData.find((orderItem) => orderItem.id === item.order_id)
    );
    view_BankTransData = BankTransData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.id === item.account_id)
    );
    view_LogInOutData = LogInOutData.filter((item) =>
      view_UserData.find((userItem) => userItem.id === item.user_id)
    );
    view_DividentData = DividentData.filter((item) =>
      view_AccountData.find((accountItem) => accountItem.id === item.account_id)
    );
  } else if (roleIndex_inDB === 2 || roleIndex_inDB === 3) {
    view_BrokerData = BrokerData;
    view_AccountData = AccountData;
    view_UserData = UserData;
    view_StockOrderData = StockOrderData;
    view_StockTransData = StockTransData;
    view_BankTransData = BankTransData;
    view_LogInOutData = LogInOutData;
    view_DividentData = DividentData;
  }
};

const getColumnKeys = (data) => {
  if (data && data[0]) {
    return Object.keys(data[0]);
  } else {
    return [];
  }
};

let User = view_UserData;
let Account = view_AccountData;
let Broker = view_BrokerData;
let BankTransition = view_BankTransData;
let StockOrder = view_StockOrderData;
let StockTransaction = view_StockTransData;
let Login_Logout = view_LogInOutData;
let CompanyDetails = view_CompanyData;
let Turnover = view_TurnoverData;
let Divident = view_DividentData;
let News = view_NewsData;

let userColumns = getColumnKeys(User);
let accountColumns = getColumnKeys(Account);
let brokerColumns = getColumnKeys(Broker);
let bankTransitionColumns = getColumnKeys(BankTransition);
let stockOrderColumns = getColumnKeys(StockOrder);
let stockTransactionColumns = getColumnKeys(StockTransaction);
let loginLogoutColumns = getColumnKeys(Login_Logout);
let companyDetailsColumns = getColumnKeys(CompanyDetails);
let turnoverColumns = getColumnKeys(Turnover);
let dividendColumns = getColumnKeys(Divident);
let newsColumns = getColumnKeys(News);

let tablesColumns = [
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

let userRows = User.map((document) => Object.values(document));
let accountRows = Account.map((document) => Object.values(document));
let brokerRows = Broker.map((document) => Object.values(document));
let bankTransitionRows = BankTransition.map((document) =>
  Object.values(document)
);
let stockOrderRows = StockOrder.map((document) => Object.values(document));
let stockTransactionRows = StockTransaction.map((document) =>
  Object.values(document)
);
let loginLogoutRows = Login_Logout.map((document) => Object.values(document));
let companyDetailsRows = CompanyDetails.map((document) =>
  Object.values(document)
);
let turnoverRows = Turnover.map((document) => Object.values(document));
let dividendRows = Divident.map((document) => Object.values(document));
let newsRows = News.map((document) => Object.values(document));

let tablesRows = [
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

export const Updating = () => {
  User = view_UserData;
  Account = view_AccountData;
  Broker = view_BrokerData;
  BankTransition = view_BankTransData;
  StockOrder = view_StockOrderData;
  StockTransaction = view_StockTransData;
  Login_Logout = view_LogInOutData;
  CompanyDetails = view_CompanyData;
  Turnover = view_TurnoverData;
  Divident = view_DividentData;
  News = view_NewsData;

  userColumns = getColumnKeys(User);
  accountColumns = getColumnKeys(Account);
  brokerColumns = getColumnKeys(Broker);
  bankTransitionColumns = getColumnKeys(BankTransition);
  stockOrderColumns = getColumnKeys(StockOrder);
  stockTransactionColumns = getColumnKeys(StockTransaction);
  loginLogoutColumns = getColumnKeys(Login_Logout);
  companyDetailsColumns = getColumnKeys(CompanyDetails);
  turnoverColumns = getColumnKeys(Turnover);
  dividendColumns = getColumnKeys(Divident);
  newsColumns = getColumnKeys(News);

  tablesColumns = [
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

  userRows = User.map((document) => Object.values(document));
  accountRows = Account.map((document) => Object.values(document));
  brokerRows = Broker.map((document) => Object.values(document));
  bankTransitionRows = BankTransition.map((document) =>
    Object.values(document)
  );
  stockOrderRows = StockOrder.map((document) => Object.values(document));
  stockTransactionRows = StockTransaction.map((document) =>
    Object.values(document)
  );
  loginLogoutRows = Login_Logout.map((document) => Object.values(document));
  companyDetailsRows = CompanyDetails.map((document) =>
    Object.values(document)
  );
  turnoverRows = Turnover.map((document) => Object.values(document));
  dividendRows = Divident.map((document) => Object.values(document));
  newsRows = News.map((document) => Object.values(document));

  tablesRows = [
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
};
export { tablesColumns };
export { tablesRows };
