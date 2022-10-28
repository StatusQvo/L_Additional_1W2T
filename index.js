const clientName = 'Игорь'
let clientSpentForAllTime = 110
let clientSpentToday = 25
let discount = 0

if (100 >= clientSpentForAllTime < 300) {
  discount += 10
} else if (300 >= clientSpentForAllTime < 500) {
  discount += 10
} else if (clientSpentForAllTime >= 500) {
  discount += 10
}

clientSpentToday -= (clientSpentToday * discount) / 100

alert(`Вам предоставляется скидка в ${discount}%!`)
clientSpentForAllTime += clientSpentToday

alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
)
