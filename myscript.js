function query1(name){
  var url = 'cgi-bin/actorsName.py?name='+name;
  console.log(url);
  ajax(url, render)
}
function render(data){
  console.log(data)
  //TODO: how about empty data?
  var table = "<table id='answere1'>";
  var row = data[0];
  table += '<tr>';
  for(key in row){
    table += '<th>';
    table += key;
    table += '</th>';
  }
  table += '</tr>';
  for(var i in data){
    table += '<tr>';
    row = data[i];
    for(key in row){
      table += '<td>';
      table += row[key];
      table += '</td>';
    }
    table += '</tr>';
  }
  table += "</table>";
  console.log(table)
  document.getElementById("answere1").innerHTML = table;
}
function ajax(url, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json = JSON.parse(this.responseText);
      callback(json);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
