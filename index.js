'use strict';



(function abc() {
  $('.thumbnail').on(click, function(event) {
    const changeSrc = $(this).find('img').attr('src');
    const changeAlt = $(this).find('img').attr('alt');

    $('.hero img').attr('src', changeSrc).attr('alt', imgAlt);
  });
}

$(abc);