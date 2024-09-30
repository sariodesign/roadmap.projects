const dropdownSelect = document.querySelector('.dropdown__select');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

const selectedItem = document.querySelector('.dropdown__selected-item')

dropdownSelect.addEventListener('click', () => {
  dropdownSelect.classList.toggle('dropdown__select--open');
  dropdownList.classList.toggle('dropdown__list--visible')
  console.log('clicked')
})


dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    if(dropdownSelect.classList.contains('dropdown__select--open') && dropdownList.classList.contains('dropdown__list--visible')) {
      dropdownSelect.classList.remove('dropdown__select--open')
      dropdownList.classList.remove('dropdown__list--visible')
      selectedItem.textContent = item.textContent
    }
    
    dropdownItems.forEach(item => item.classList.remove('dropdown__item--selected'))
    item.classList.add('dropdown__item--selected')
  })
})