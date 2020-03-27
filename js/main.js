$(document).ready(function () {
  let tabsitem = $('.tabs-item');

  tabsitem.on('click', function (event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs-item-actve').toggleClass('tabs-item-actve');
    $(this).toggleClass('tabs-item-actve');
  });

});