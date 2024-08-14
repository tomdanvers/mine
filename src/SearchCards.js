import './SearchCards.scss';

import SearchCard from './SearchCard';

function SearchCards(props) {
  return (
    <div className="SearchCards">
      <h3>Search Cards</h3>
      <div className="SearchCards-list">
        {props.cards.map((card, index) => {
          return (<SearchCard key={index} {...card}/>);
        })}
      </div>  
    </div>
  );
}

export default SearchCards;