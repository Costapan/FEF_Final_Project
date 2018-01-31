console.log("Javascript Test");

/*function change() {
    const content = new XMLHttpRequest();
    content.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let changedContent = content.responseText;
        document.getElementById("ajaxRequest").innerHTML = changedContent;
      }
    }
  };

content.open("GET", "https://api.github.com/users/Costapan/repos", true);
content.send();*/

/*function loadDoc(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
  document.getElementById("").innerHTML = xhttp.responseText;
}*/

function load() {
  let gitHubRequest = new XMLHttpRequest();
  gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let gitObject = JSON.parse(this.responseText);
      document.getElementById("ajaxRequest").innerHTML = "<a href='" + gitObject[0].html_url + "' target='_blank'>" + gitObject[0].name + "</a><br>" +
                                                         "<a href='" + gitObject[1].html_url + "' target='_blank'>" + gitObject[1].name + "</a><br>";
    }
  };
  gitHubRequest.open("GET", "https://api.github.com/users/Costapan/repos", true);
  gitHubRequest.send();
};