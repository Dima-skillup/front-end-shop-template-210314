const cartCounterLabel = document.querySelector('#cart-counter');
const buttonsContainer = document.querySelector('.content-grid');
// const buttons = document.querySelectorAll('.item-actions__cart');


let  cartCounter = 0;
let  cartPrice = 0;


function clickHandler(e) {
  let target = e.target;

  if (e.target.classList.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = `${++cartCounter}`;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = +target.parentElement.previousElementSibling.innerHTML
        .replace(/^\$(\d+)\s\D+(\d+).*$/, '$1.$2');

    cartPrice = Math.round((cartPrice + mockData) * 100) / 100;

    let restoreHTML = target.innerHTML;

    target.innerHTML  = `Added ${cartPrice.toFixed(2)} $`;
    target.disabled = true;
    buttonsContainer.removeEventListener('click', clickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      target.disabled = false;
      buttonsContainer.addEventListener('click', clickHandler);
    }, 2000)
  }
}

// for(let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler);
// }

buttonsContainer.addEventListener('click', clickHandler);
