import $ from 'jquery';

const locationCardData = [

  {
    image: '/src/img/cities_0003_Brazil.png',
    location: 'Brazil',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde persp.',
    id: 'location-1',
  },
  {
    image: '/src/img/cities_0004_Bali.png',
    location: 'Bali',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde persp.',
    id: 'location-2',
  },
  {
    image: '/src/img/cities_0005_Puerto-Rico.png',
    location: 'Puerto Rico',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde persp.',
    id: 'location-3',
  },
  {
    image: '/src/img/cities_0006_Costa-Rica.png',
    location: 'Costa Rica',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde persp.',
    id: 'location-4',
  },
  {
    image: '/src/img/cities_0000_Ibiza.png',
    location: 'Ibiza',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde persp.',
    id: 'location-5',
  },
  {
    image: '/src/img/cities_0001_Barsalonia.png',
    location: 'Barsalonia',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde persp.',
    id: 'location-6',
  },


];

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const printToDom2 = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint;
};

const addSendEventListener = (e) => {
  e.preventDefault();
  const textElement = $(e.target).siblings()[0].value;
  const diaryString = `<h3 class="output col-md 12 text-center">${textElement}</h3>`;
  printToDom2(diaryString, 'output');
};

const printCards = (locationCard) => {
  let domString = '';
  for (let i = 0; i < locationCard.length; i += 1) {
    domString += `

<div class="card">
               <div class="card__image-container">
                 <img class="card__image" src=${locationCard[i].image}>
              </div>
                
                <svg class="card__svg" viewBox="0 0 800 500">
            
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#DFE8EC"/>
                  <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
                </svg>
              
               <div class="card__content">
                 <h1 class="card__title">${locationCard[i].location}</h1>
               <p>${locationCard[i].info}t</p>
              </div>
              <form class="message-container" id="add-message">
                   <div id="inputContainer">
                   <textarea class="form-control centerTextArea textBox" placeholder="type entry here"></textarea>
                   <button class="btn btn-dark send-button">Send</button>
                   </div>
               </form>
            </div>

`;
  }

  printToDom(domString, 'card-place');
  $('body').on('click', '.send-button', addSendEventListener);
};


// printCards(locationCardData);


// cont entries = [];


// const printToDom = (toPrint, divId) => {
//   document.getElementById(divId).innerHTML = toPrint;
// };

export default { printCards, locationCardData };
