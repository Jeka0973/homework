const table = document.getElementById('multiplyTable')
let [numOfRows, numOfColumns] = prompt(`Введите размер таблицы в виде X:Y`).split(':').map(Number)

const setRowColumnDataset = (row, col) => {
  let arr = [[]]
  for (let i = 0; i < row; i++) {
    let tr = document.createElement('tr')
    arr[i] = [i + 1]
    if (i % 2) {
      tr.classList.add('tdGrey')
    }
    for (let j = 0; j < col; j++) {
      let td = document.createElement('td')
      arr[i][j] = (i + 1) * (j + 1)
      td.textContent = arr[i][j]
      td.dataset.row = i
      td.dataset.col = j
      td.dataset.prevBgColor = td.style.backgroundColor
      td.addEventListener('mouseover', () => {
        setCrossColors(i, j)
      })
      td.addEventListener('mouseout', () => {
        td.style.backgroundColor = td.dataset.prevBgColor
        removeCrossColors(i, j)
      })
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
}

setCrossColors = (row, col) => {
  const allTd = document.querySelectorAll('td')
  for (let i = 0; i < allTd.length; i++) {
    if (allTd[i].dataset.row == row) {
      allTd[i].style.backgroundColor = '#00FF00'
    }
    if (allTd[i].dataset.col == col) {
      allTd[i].style.backgroundColor = '#FF0000'
    }
  }
}

removeCrossColors = (row, col) => {
  const allTd = document.querySelectorAll('td')
  for (let i = 0; i < allTd.length; i++) {
    if (allTd[i].dataset.row == row) {
      allTd[i].style.backgroundColor = allTd[i].dataset.prevBgColor
    }
    if (allTd[i].dataset.col == col) {
      allTd[i].style.backgroundColor = allTd[i].dataset.prevBgColor
    }
  }
}

setRowColumnDataset(numOfRows, numOfColumns)
