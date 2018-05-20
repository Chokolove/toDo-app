$('document').ready(function(){
  $('#btn').click(function(){
    var li = $('<li></li>')
    var text = $('#textbox').val()
    var btn = $('<button>X</button>')
    btn.click(() => li.remove())
    li.append(text)
    li.append(btn)
    $('#list').append(li)
    $('#textbox').val('')
    $('#textbox').focus()
  });

  $('ul').click(function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    };
  });
});
