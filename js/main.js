/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createContainer() {
  el = document.createElement('div');
  el.setAttribute('id', 'carousel');
  el.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild('el');
  container = document.querySelector('#carousel');
}

function createSlides(n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');
  for (i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');
    slideItem.setAttribute('class',
      i === 0 ?
        'slides__item active'
        :
        'slides__item'
    );
    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);
  }
  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');
  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');
    indicatorsItem.setAttribute('class',
      i === 0 ?
        'indicators__item active'
        :
        'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);
  }
  container.appendChild(indicatorsContainer);
}

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls')

  for (i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');
    let contrClass = 'controls__item';
    let contrIcon = 'fas';
    switch (i) {
      case 0:
        controlsItem.setAttribute('class', `${contrClass} controls__prev`);
        controlsIcon.setAttribute('class', `${contrIcon} fa-chevron-left`);
        break;
      case 1:
        controlsItem.setAttribute('class', `${contrClass} controls__next`);
        controlsIcon.setAttribute('class', `${contrIcon} fa-chevron-right`);
        break;
      case 2:
        controlsItem.setAttribute('class', `${contrClass} controls__pause`);
        controlsIcon.setAttribute('class', `${contrIcon} fa-play`);
        break;
    }

    controlsItem.appendChild(controlsIcon);
    controlsContainer.appendChild(controlsItem);
  }
  container.appendChild(controlsContainer);
}

function createStyle() {
  styleContainer = document.createElement('style')
  let codeStyle = `.slides {
    position: relative;
    height: 150px;
    padding: 0px;
    margin: 0px;
    backgraundcolor: green;
    list-style-type: none;}

  .controls {
    position: relative;
  }
  .indicators {
    display: flex;
  }
  .indicators__item {
    display:block;
    width: 40px;
    height:40px;
    background color: black;
    border-radius: 7px;
    margin: 10px;
  }`;
  styleContainer.innerHTML = codeStyle;
  container.appendChild(styleContainer);

}

function indicatorsMain(evt) {
  let target = evt.target;
  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';
    if (prvIndicator !== null) prvIndicator.removeAttribute('style');
    prvIndicator = target;
  }
}

function indicatorsListener() {
  let indicatorsContainer = document.querySelector('div.indicators');
  indicatorsContainer.addEventListener('click', indicatorsMain);
}

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  indicatorsListener();
}

createCarousel(4);
