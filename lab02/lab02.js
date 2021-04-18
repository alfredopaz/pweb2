
function createTable(){
  let n = document.getElementById('n').value;

  //creating a basic row
  let table = '<table class="numberTable">';
  table += "<tr>";
  for(let x = 0; x < n; x++){
    table += `<td><input type='number' id='VAL_${x}' class='cell'></td>`;
  }
  table += "</tr>";
  table += "</table>"
  console.log(table);
  document.getElementById('table').innerHTML=table;
}
