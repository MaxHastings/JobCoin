export default function GetBalanceHistory(
  address,
  currentBalance,
  transactions
) {
  var history = [];
  transactions.reverse();
  history.push(currentBalance);
  for (var i = 0; i < transactions.length; i++) {
    var tx = transactions[i];
    if (tx.toAddress === address) {
      if (tx.fromAddress === address) {
        history.push(currentBalance);
      } else {
        currentBalance -= parseFloat(tx.amount);
        history.push(currentBalance);
      }
    } else {
      currentBalance += parseFloat(tx.amount);
      history.push(currentBalance);
    }
  }
  history.reverse();
  return history;
}
