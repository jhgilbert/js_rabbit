$(document).ready(function() {
  $('#magic-hat').click(function() {
    $(this).attr('src', 'images/hat_with_rabbit.png');
    $('#start-over').fadeIn(1000);
  });

  $('#start-over').click(function() {
    $('#magic-hat').attr('src', 'images/hat_without_rabbit.png');
    $(this).hide();
  });
});
