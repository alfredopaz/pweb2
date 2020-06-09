function query1(name){
  var url = 'cgi-bin/actorsName.py?name='+name;
  console.log(url);
  ajax(url, render)
}
function render(data){
  console.log(data)
}
function ajax(url, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
