$("document").ready(function(){
  $("#btn").click(function(){
    var btn = "<button>X</button>";
    var li = "<li>"+$("#textbox").val()+"<button class='delete'>X</button></li>"
    $("#list").append(li);
    $(".delete").click(function(){
      this.parentElement.remove();
    })
    $("#textbox").val("");
    $("#textbox").focus();
  });

  $("ul").click(function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    };
  });
});
