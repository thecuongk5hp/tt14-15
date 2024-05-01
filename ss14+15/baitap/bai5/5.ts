/*
    Định nghĩa lớp Account có các thuộc tính accountNumber, balance và history.
    Thuộc tính history là mảng chứa các giao dịch của tài khoản. Lớp có các phương thức deposit, withdraw, transfer và showHistory.
    Tạo ra một mảng để chứa các tài khoản được tạo ra từ lớp.
    Định nghĩa lớp Transaction có các thuộc tính id, type, amount, newBalance.
    Xây dựng các phương thức trong lớp Account. Phương thức deposit dùng để gửi thêm tiền vào tài khoản, phương thức withdraw dùng để rút tiền từ tài khoản.
    Phương thức transfer dùng để chuyển tiền từ tài khoản này sang tài khoản khác.
    Phương thức showHistory dùng để hiển thị lịch sử giao dịch của tài khoản.
    Phương thức withdraw sẽ thông báo khi tài khoản hết tiền, tương tự với phương thức transfer. Phương thức transfer sẽ có 1 tham số là accountNumber, 
    khi gọi phương thức này thì tài khoản gốc sẽ giảm và tài khoản nhận sẽ tăng lên.
*/

class Account {
    accountNumber: number;
    balance: number;
    history: Transaction[];
    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }
    deposit(amount: number): void {
        const transaction = new Transaction(Date.now(), "deposit", amount, this.balance + amount);
        this.balance += amount;
        this.history.push(transaction);
    }
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            const transaction = new Transaction(Date.now(), "withdraw", amount, this.balance - amount);
            this.balance -= amount;
            this.history.push(transaction);
        } else {
            console.log("Insufficient balance");
        }
    }
    transfer(amount: number, accountNumber: number): void {
        const account = accounts.find((account) => account.accountNumber === accountNumber);

        if (account && this.balance >= amount) {
            this.withdraw(amount);
            account.deposit(amount);
        } else {
            console.log("Invalid account number or insufficient balance");
        }
    }
    showHistory(): void {
        console.log("Transaction history:");
        this.history.forEach((transaction) => {
            console.log(`Type: ${transaction.type}, Amount: ${transaction.amount}, New balance: ${transaction.newBalance}`);
        });
    }
}
let accounts: Account[] = [];
class Transaction {
    id: number;
    type: string;
    amount: number;
    newBalance: number;

    constructor(id: number, type: string, amount: number, newBalance: number) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}
const account1 = new Account(1, 1000);
const account2 = new Account(2, 2000);
account1.deposit(500);
account1.withdraw(200);
account1.transfer(300, 2);
account1.showHistory();