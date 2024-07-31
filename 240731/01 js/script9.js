let num = 1; // 숫자가 1부터 시작

let t = `<table border=1>`;

for (let i = 1; i <= 5; i++) {
  // 표 만들기
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}

t += `</table>`;

document.write(t);
