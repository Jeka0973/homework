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
    //td.dataset.row = i
    //td.dataset.col = j
    const prevTdBackgroundColor = td.style.backgroundColor
    td.addEventListener('mouseover', () => {
      td.style.backgroundColor = '#00FF00'
    })
    td.addEventListener('mouseout', () => {
      td.style.backgroundColor = prevTdBackgroundColor
    })
    tr.appendChild(td)
  }
  table.appendChild(tr)
}
