package com.company.bankaccount;

public class MaiText {

	public static void main(String[] args) {
		BankAccount maitest = new BankAccount();
		
		maitest.printAccountNumber();
		maitest.usergetCheckingBalance();
		maitest.usergetSavingsBalance();
		maitest.userDeposit("checking" , 500);
		maitest.userDeposit("savings" , 2500);
		maitest.userDeposit("checking" , 100);
		
		maitest.userWithdrawal("checking", 700);
		maitest.userWithdrawal("savings", 3000);
		maitest.userWithdrawal("checking", 100);
		maitest.userWithdrawal("savings", 200);
		maitest.showAccountBalances();
		
		

	}

}
