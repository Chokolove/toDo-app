$('document').ready(function(){
  $('#btn').click(function(){
    var li = $('<li></li>')
    var text = $('#textbox').val()
    var span = $('<span></span>').text(text)
    span.click(() =>{
      span.toggleClass('checked')
      counter()
    })
    var btn = $('<button>X</button>')
    btn.click(() =>{
      li.remove()
      counter()
    })
    li.append(span)
    li.append(btn)
    $('#list').append(li)
    counter()
    $('#textbox').val('')
    $('#textbox').focus()
  })
  function counter(){
    $('#total').text($('li').length)
    $('#pending').text($('li').length-$('.checked').length)
    $('#done').text($('.checked').length)
  }
});
