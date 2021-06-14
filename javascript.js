function changeItem() {
    document.getElementById('container-lear');
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem() {
    document.getElementById('number').style.color = '#5A0D67';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.


  $('.carousel').flickity({
   autoPlay: true,
    wrapAround: true,
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    initialIndex: 0,
  });