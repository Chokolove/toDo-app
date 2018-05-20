$('document').ready(function(){
  $('#btn').click(function(){
    var li = $('<li></li>')
    var text = $('#textbox').val()
    var span = $('<span></span>').text(text)
    span.click(() => span.toggleClass('checked'))
    var btn = $('<button>X</button>')
    btn.click(() => li.remove())
    li.append(span)
    li.append(btn)
    $('#list').append(li)
    $('#textbox').val('')
    $('#textbox').focus()
  });
});
