package com.company.bankaccount;

import java.util.Random;

public class BankAccount {
	private static int accountcounter;
	private static int bankfunds;
	
	private long accountnumber;
	private double checkingbalance;
	private double savingbalance;
	
	private long accountNumberRandomizer() {
		Random ac = new Random();
		long accountnumber = ac.nextInt((int) (9999999999L-0000000000));
		System.out.println(accountnumber);
		return accountnumber;
	}

	public BankAccount(long accountnumber, double checkingbalance, double savingbalance) {
		this.accountnumber = accountNumberRandomizer();
		this.checkingbalance = checkingbalance;
		this.savingbalance = savingbalance;
		accountcounter++;
		
	}
	
	public BankAccount() {
		// TODO Auto-generated constructor stub
	}


	public long getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(long accountnumber) {
		this.accountnumber = accountnumber;
	}

	public double getCheckingbalance() {
		return checkingbalance;
	}

	public double setCheckingbalance(double checkingbalance) {
		return this.checkingbalance = checkingbalance;
	}

	public double getSavingbalance() {
		return savingbalance;
	}

	public double setSavingbalance(double savingbalance) {
		return this.savingbalance = savingbalance;
	}
	
	
	//Public Methods
	public void printAccountNumber() {
		accountNumberRandomizer();
	}
	
	public void usergetCheckingBalance() {
		System.out.println("Current Checking Balance: $" + this.checkingbalance);
	}
	
	public void usergetSavingsBalance() {
		System.out.println("Current Savings Balance: $" + this.savingbalance);
	}
	
	public void userDeposit (String accounttype, int amount) {
		if (accounttype == "checking") {
			double newamount = this.checkingbalance + amount;
			System.out.println("Deposit Amount: $" + amount + " | New Checking Balance: $" + newamount);
			bankfunds += amount;
			System.out.println("Bank Funds: $" + bankfunds);
			this.checkingbalance = newamount;
			
		}
		if (accounttype == "savings") {
				double newamount = this.savingbalance + amount;
				System.out.println("Deposit Amount:" + amount + " | New Savings Balance: $" + newamount);
				bankfunds += amount;
				System.out.println("Bank Funds: $" + bankfunds);
				this.savingbalance = newamount;
			}
		}
	
	public void userWithdrawal(String accounttype, int amount) {
		if (accounttype == "checking") {
			if (this.checkingbalance < amount) {
				System.out.println("Your withdrawal amount is: $"+ amount + ". You have insufficient funds! You current balance is:" + this.checkingbalance);
			}
			else {
			double newamount = this.checkingbalance - amount;
			System.out.println("Checking Withdrawal Amount: $" + amount + " | New Checking Balance: $" + newamount);
			bankfunds -= amount;
			System.out.println("Bank Funds: $" + bankfunds);
			this.checkingbalance = newamount;
			}
		}
		if (accounttype == "savings") {
			if (this.savingbalance < amount) {
				System.out.println("Your withdrawal amount is: $"+ amount + ". You have insufficient funds! You current balance is:" + this.savingbalance);
			}
			else {
			double newamount = this.savingbalance - amount;
			System.out.println("Savings Withdrawal Amount: " + amount + " | New Savings Balance: $" + newamount);
			bankfunds -= amount;
			System.out.println("Bank Funds: $" + bankfunds);
			}
		}
	} 
	
	public void showAccountBalances() {
		System.out.println("Your checking balanace is: $"+ this.checkingbalance + ". Your current savings balance is: $" + this.savingbalance);
	}
	
}
