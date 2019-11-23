import 'bootstrap';
import '../styles/main.scss';
import cards from './components/cards/cards';

const init = () => {
  cards.printCards(cards.locationCardData);
};

init();
