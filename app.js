function init() {
    let map = new ymaps.Map('map', {
        center: [53.96019810253923, 27.621942142852788],
        zoom: 17
    })

    let placemark = new ymaps.Placemark([53.96019810253923, 27.621942142852788], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://e7.pngegg.com/pngimages/911/866/png-clipart-computer-icons-symbol-location-marker-miscellaneous-black-and-white-thumbnail.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    })
    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}
ymaps.ready(init)


const menu = document.querySelector('nav')
const menuBtn = document.querySelector('menu-icon')
const body = document.body

if (menu && menuBtn) {
    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}
