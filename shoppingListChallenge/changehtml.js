'use strict';


const generateItemHtml = function(item) {
  return `
      <li>
      ${item}
      <button class="check">
        check
      </button>
      <button class="delete">
        delete
      </button>
    </li>
    `
    ;
};


function renderItem() {
  $('.add-item-form').on('submit', function(event) {
    event.preventDefault();
    // use $(this) find jquery method event del<< and propagation
    const myitem = generateItemHtml('broccoli');
    console.log(myitem);
    $('.shop-list').append(myitem);
  } )
}

$(renderItem)