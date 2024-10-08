import { useState, useEffect } from 'react';
import Papa, { DefaultDelimiter } from 'papaparse';
import './App.scss';
import Instructions from './Instructions';
import AsteroidCards from './AsteroidCards';
import Ships from './Ships';
import ShipCards from './ShipCards';
import GameDataInsights from './GameDataInsights';


function App() {
  const searchParams = new URLSearchParams(window.location.search);
  
  const [print] = useState(searchParams.has('print'));
  const [data, setData] = useState(null);

  const int = (src) => {
    return src === '' ? 0 : parseInt(src);
  }

  const parse = (label, data) => {
    let subset = [];
    let save = false;
    data.forEach((line) => {
      if (line[0] === `end_${label}`) {
        save = false;
      }

      if (save) {
        let key = line[0];
        for (let i = 1; i < line.length; i ++) {
          if (subset[i - 1] === undefined) {
            subset[i - 1] = {}
          }
          subset[i - 1][key] = line[i];
        }
      }
      
      if (line[0] === `start_${label}`) {
        save = true;
      }
    });
    return subset;
  }

  const parseResources = (srcData) => {
    let parsedData = [];
    srcData.forEach((datum) => {
      if (datum.id !== '') {
        parsedData.push({
          id: datum.id,
          name: datum.name,
          nameShort: datum.name.substring(0, 1),
          description: datum.description,
          vp: datum.vp === '' ? 0 : int(datum.vp),
          colour: datum.colour,
          token_count: datum.vp === '' ? 0 : int(datum.token_count)
        });
      }
    });
    return parsedData;
  }
  
  const parseCardTypes = (srcData) => {
    let parsedData = [];
    srcData.forEach((datum) => {
      if (datum.id !== '') {
        parsedData.push({
          id: datum.id,
          colour: datum.colour
        });
      }
    });
    return parsedData;
  }

  const parseResourceCount = (id, count) => {
    return {
      id,
      count: count === '' ? 0 : int(count)
    }
  };
  
  const parseCards = (srcData) => {
    let parsedData = [];
    srcData.forEach((datum) => {
      if (datum.id !== '') {
        parsedData.push({
          id: datum.id,
          type: datum.type,
          vp: int(datum.vp),
          counts: [
            parseResourceCount('a', datum.count_a),
            parseResourceCount('b', datum.count_b),
            parseResourceCount('c', datum.count_c),
            parseResourceCount('d', datum.count_d),
            parseResourceCount('z', datum.count_z)
          ]
        });
      }
    });
    return parsedData;
  }

  const parseShipCardTypes = (srcData) => {
    let parsedData = [];
    srcData.forEach((datum) => {
      if (datum.id !== '') {
        parsedData.push({
          id: datum.id,
          icon: datum.icon
        });
      }
    });
    return parsedData;
  }

  const parseShipCardArchetypes = (srcData) => {
    let parsedData = [];
    srcData.forEach((datum) => {
      if (datum.id !== '') {
        parsedData.push({
          id: datum.id,
          count: int(datum.count),
          label: datum.label
        });
      }
    });
    parsedData.sort((a, b) => a.count - b.count);
    return parsedData;
  }
  
  const parseResourceCost = (id, cost) => {
    return {
      id,
      cost: cost === '' ? 0 : int(cost)
    }
  };

  const parseShipCard = (datum) => {
    let shipCard = {
      id: datum.id,
      archetype: datum.archetype,
      type: datum.type,
      count: datum.count,
      name: datum.name,
      phase: datum.phase === '' ? false : datum.phase,
      description: datum.description === '' ? false : datum.description.trim(),
      isDisposable: datum.disposable === 'TRUE',
      vp: int(datum.vp),
      costTotal: 0,
      costs: [
        parseResourceCost('a', datum.cost_a),
        parseResourceCost('b', datum.cost_b),
        parseResourceCost('c', datum.cost_c),
        parseResourceCost('d', datum.cost_d),
        parseResourceCost('z', datum.cost_z)
      ]
    };

    shipCard.costTotal = shipCard.costs.reduce((val, item) => val += item.cost, 0);

    return shipCard;
  }

  const parseShipCards = (srcData) => {
    let parsedData = [];
    srcData.forEach((datum, index) => {
      if (datum.id !== '') {
        if (index === 0 || index === 1) {
          parsedData.push(parseShipCard(datum));
        } else {
          for (let i = 0; i < datum.count; i ++) {
            parsedData.push(parseShipCard(datum));
          }
        }
      }
    });
    return parsedData;
  }

  const parseData = (data) => {
        
    let parsedData = {
      resources: parseResources(parse('resources', data)),
      cardTypes: parseCardTypes(parse('card_types', data)),
      cards: parseCards(parse('cards',data)),
      shipCardTypes: parseShipCardTypes(parse('ship_card_types', data)),
      shipCardArchetypes: parseShipCardArchetypes(parse('ship_card_archetypes', data)),
      shipCards: parseShipCards(parse('ship_cards', data)),
    };

    parsedData.cardTypesMap = {};
    parsedData.cardTypes.forEach(cardType => parsedData.cardTypesMap[cardType.id] = cardType);
    
    parsedData.resourcesMap = {};
    parsedData.resources.forEach(resource => parsedData.resourcesMap[resource.id] = resource);

    parsedData.shipCardTypesMap = {};
    parsedData.shipCardTypes.forEach(shipCardType => parsedData.shipCardTypesMap[shipCardType.id] = shipCardType);

    parsedData.shipCardArchetypesMap = {};
    parsedData.shipCardArchetypes.forEach(shipCardArchetype => parsedData.shipCardArchetypesMap[shipCardArchetype.id] = shipCardArchetype);

    parsedData.shipCardMap = {};
    parsedData.shipCards.forEach(shipCard => parsedData.shipCardMap[shipCard.id] = shipCard);

    parsedData.shipCards.forEach((shipCardA) => {

      // Replace arcetype id with actual id
      shipCardA.archetype = parsedData.shipCardArchetypesMap[shipCardA.archetype];

      // Replace reference to other ship cards in descriptions
      parsedData.shipCards.forEach((shipCardB) => {
        if (shipCardA !== shipCardB && shipCardA.description) {
          shipCardA.description = shipCardA.description.replaceAll(`[SC:${shipCardB.id}]`, shipCardB.name);
        }
      });
      
      // Replace reference to resources in tiles and descriptions
      parsedData.resources.forEach((resourceA) => {
        if (shipCardA.name) {
          shipCardA.name = shipCardA.name.replaceAll(`[R:${resourceA.id}]`, resourceA.name);
        }
        if (shipCardA.description) {
          shipCardA.description = shipCardA.description.replaceAll(`[R:${resourceA.id}]`, resourceA.name);
        }
      });
    });

    // // Sort cards
    parsedData.shipCards.sort((a, b) => {
      return a.archetype.count - b.archetype.count;
    });

    GameDataInsights.log(parsedData);

    return parsedData;
  };

  useEffect(() => {
    Papa.parse(`https://docs.google.com/spreadsheets/d/1Iu64gF0eUMzJ7D-BdNuYPXarCzOD23ivcS7ciAF2Zq0/pub?output=csv&r=${Math.round(Math.random() * 1000)}`, {
      download: true,
      complete: (results, file) => {
        setData(parseData(results.data));
      }
    });
  }, []);

  const renderLoading = () => (
    <>
      <p>Loading game data from Google Drive...</p>
    </>
  );

  const renderLoaded = () => (
    <>
      <Instructions />
      <AsteroidCards cardTypes={data.cardTypesMap} cards={data.cards} resources={data.resourcesMap} />
      <Ships count={4} hold={data.shipCardMap['1']} drone={data.shipCardMap['2']} cardTypes={data.shipCardTypesMap} resources={data.resourcesMap}/>
      <ShipCards cardArchetypes={data.shipCardArchetypesMap} cardTypes={data.shipCardTypesMap} cards={data.shipCards} resources={data.resourcesMap} />
    </>
  );

  return (
    <div className={`App${print ? ' print' : ''}`}>
      <header className="App-header">
        {print ? (<h1>Print Version - {new Date().toDateString()}</h1>) : null}
      </header>
      <div>
        {data === null ? renderLoading() : renderLoaded()}
      </div>
    </div>
  );
}

export default App;
