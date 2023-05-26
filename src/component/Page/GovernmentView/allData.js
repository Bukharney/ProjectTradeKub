//ดึงข้อมูลทุกแถวของแต่ละ Table ลงนี่เลย เดะ query ใน databaseTable.js เอา

export const UserData =
    [
        {
            user_id: 2,
            username: 'Bob',
            password: 'abc',
            registered_date: '1990-01-30',
            email: 'bob@mail',
            phone_number: '087'
        },
        {
            user_id: 3,
            username: 'A',
            password: 'a',
            registered_date: '1990-01-30',
            email: 'A@mail',
            phone_number: '087'
        },
    ];
export const AccountData =
    [
        {
            account_id: 0,
            broker_id: 2,
            user_id: 2,
            cash_balance: 20,
            line_available: 20,
            credit_limit: 20,
            pin: '123',
            contracted_datetime: '1990-03-01'
        },
        {
            account_id: 1,
            broker_id: 2,
            user_id: 2,
            cash_balance: 20,
            line_available: 20,
            credit_limit: 20,
            pin: '123',
            contracted_datetime: '1990-03-02'
        },
        {
            account_id: 2,
            broker_id: 2,
            user_id: 2,
            cash_balance: 20,
            line_available: 20,
            credit_limit: 20,
            pin: '123',
            contracted_datetime: '1990-03-03'
        },

        {
            account_id: 3,
            broker_id: 2,
            user_id: 3,
            cash_balance: 20,
            line_available: 20,
            credit_limit: 20,
            pin: '123',
            contracted_datetime: '1990-03-28'
        },

        {
            account_id: 4,
            broker_id: 3,
            user_id: 3,
            cash_balance: 200,
            line_available: 200,
            credit_limit: 200,
            pin: '123',
            contracted_datetime: '1990-03-29'
        },
    ];
export const BrokerData =
    [
        {
            broker_id: 2,
            organization_name: 'KBANK',
            api_key: 'adasdasdsa'
        },
        {
            broker_id: 3,
            organization_name: 'KRUNGTHEP',
            api_key: 'adasdasdsa'
        },

    ];

//https://forum.5paisa.com/portal/en/kb/articles/types-of-stock-trading-order-and-its-validity
export const StockOrderData =
    [
        {
            order_id: 2,
            account_id: 2,
            stock_symbol: 'ABC',
            order_type: 'Market Order',
            order_volume: 900,
            order_price: 12,
            order_datetime: '1999-05-01',
            order_status: 1,
            stock_balance: 300,
            matched: 600,
            cancelled: 0,
            validity: 'Day Order',
            side: 'Buy'

        },
        {
            order_id: 3,
            account_id: 2,
            stock_symbol: 'ABC',
            order_type: 'Market Order',
            order_volume: 900,
            order_price: 12,
            order_datetime: '1999-05-01',
            order_status: 1,
            stock_balance: 300,
            matched: 600,
            cancelled: 0,
            validity: 'Day Order',
            side: 'Buy'

        },
    ];
export const StockTransData =
    [
        {
            stock_transaction_id: 2,
            order_id: 2,
            transaction_datetime: '1990-01-30',
            transaction_volume: 10,
            transaction_price: 10
        },
        {
            stock_transaction_id: 2,
            order_id: 3,
            transaction_datetime: '1990-01-28',
            transaction_volume: 10,
            transaction_price: 10
        },
    ];
export const BankTransData =
    [
        {
            bank_transaction_id: 2,
            account_id: 2,
            type: 'Deposit',
            amount: 991231,
            transaction_datetime: '1990-02-30'
        }
    ];
export const TurnoverData =
    [
        {
            stock_symbol: 'ABC',
            datetime: '1999-05-12',
            asset: 12,
            dept: 1,
            P_per_BV: 2,
            EPS: 32,
            divident_per_unit: 10,
            net_profit: 20
        }
    ];
export const LogInOutData =
    [
        {
            user_id: 2,
            login_datetime: '1999-02-15',
            logout_datetime: '1999-04-15',
            device: 'Android',
            ip_address: '127.0.1'
        }
    ];
export const CompanyData =
    [
        {
            stock_symbol: 'ABC',
            company_name: 'ABCD',
            stock_industry: 'food',
            market_value: 12,
            volume: 200,
            address: 'Bankok',
            tel: '087',
            website: 'www.asdasd',
            registered_capital: 999,
            establish_date: '1000-01-01',
            ipo_price: 12,
            free_float: 23,
            mojor_shareholder: 30,
        }
    ];
export const DividentData =
    [
        {
            divident_transaction_id: 2,
            account_id: 2,
            transaction_datetime: '1999-04-15',
            stock_symbol: 'ABC',
            value: 20
        }
    ];
export const NewsData =
    [
        { stock_symbol: 'ABC',
         news_datetime: '1999-05-05' ,
        stock_symbol: 'ABC',
        contents: 'กล้วยตานีปลายหวีเหี่ยว',
        news_datetime: '1999-09-15',
        files: 'asdasdasdasd'
        }
    ];



