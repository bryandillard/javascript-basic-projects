class Bank {
  constructor(balance){
    this.balance = balance
  }

  withdraw(amount){
    if(this.balance - amount <= 0){
      alert('balance cannot go below zero')
      return
    }

    this.balance -= amount
  }

  deposit(amount){
    this.balance += amount
  }
}

const bryanChecking = new Bank(0)

const depositButton = document.getElementById('deposit')

const withdrawButton = document.getElementById('withdraw')

const inputDiv = document.getElementById('amount')

const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
  const amount = Number(inputDiv.value)
  bryanChecking.deposit(amount)
  balanceDiv.innerText = `Balance: $${bryanChecking.balance}`
}

withdrawButton.onclick = () => {
  const amount = Number(inputDiv.value)
  bryanChecking.withdraw(amount)
  balanceDiv.innerText = `Balance: $${bryanChecking.balance}`
}
