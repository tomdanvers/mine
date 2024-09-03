import './ShipCards.scss';

import ShipCard from './ShipCard';

function ShipCards(props) {
  return (
    <div className="ShipCards">
      <h2>Ship Cards</h2>
      <div className="ShipCards-list">
        {props.cards.map((card, index) => {
          if (card.count > 0 && props.resources) {
            return (<ShipCard key={index} {...card} type={props.cardTypes[card.type]} resources={props.resources} />);
          }
        })}
      </div>  
    </div>
  );
}

export default ShipCards;