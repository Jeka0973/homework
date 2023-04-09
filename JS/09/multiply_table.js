const table = document.getElementById('multiplyTable')

let arr = [[]]
for (let i = 0; i < 9; i++) {
  let tr = document.createElement('tr')
  arr[i] = [i + 1]
  if (i % 2) {
    tr.classList.add('tdGrey')
  }
  for (let j = 0; j < 9; j++) {
    let td = document.createElement('td')
    arr[i][j] = (i + 1) * (j + 1)
    td.textContent = arr[i][j]
    tr.appendChild(td)
  }
  table.appendChild(tr)
}
