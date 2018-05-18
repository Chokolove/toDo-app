function addChore(){
  var ul = document.getElementById("list");
  var chore = document.getElementById("textbox").value;
  var li = document.createElement("li");
  var btn = document.createElement("button");
  li.appendChild(document.createTextNode(chore));
  btn.innerText = "X"
  btn.className = "delete";
  li.appendChild(btn);
  ul.appendChild(li);


  var btns = document.getElementsByClassName('delete');
  for (var i = 0; i<btns.length; i++){
    btns[i].onclick = function(){
      var parnt = this.parentElement;
      parnt.style.display = "none";
    }
  }
  document.getElementById("textbox").value = "";
  document.getElementById("textbox").focus();
}

var ul = document.querySelector('ul');
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
