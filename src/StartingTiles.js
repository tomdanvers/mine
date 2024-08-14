import Tile from './Tile';
import './StartingTiles.scss';

const seaProps = {
  "id": "sea",
  "label": "START HEX",
  "description": "The treacherous ocean",
  "archetype": {
      "id": "sea",
      "label": "Sea",
      "description": "The treacherous ocean",
      "placement": {
          "can": [
              "beach"
          ],
          "cant": [
              "woods",
              "plains",
              "marsh",
              "desert",
              "hills",
              "mountains"
          ],
          "must": [
              {
                  "archetype": "beach",
                  "count": "1"
              }
          ]
      }
  },
  "placement": "",
  "cost": {
      "food": 1,
      "water": 1
  },
  "resourceModifier": {
      "food": 0,
      "water": -1
  },
  "resourceCount": 1,
  "stage":0,
  "stages": [
      6,
      3,
      2
  ]
};

const coastProps = {
    "id": "beach",
    "label": "Beach",
    "description": "Sand blown beaches of the coast",
    "archetype": {
        "id": "beach",
        "label": "Beach",
        "description": "Sand blown beaches of the coast",
        "placement": {
            "can": [
                "sea",
                "woods",
                "plains",
                "marsh",
                "desert",
                "hills"
            ],
            "cant": [
                "mountains"
            ],
            "must": [
                {
                    "archetype": "sea",
                    "count": "1"
                }
            ]
        }
    },
    "placement": "",
    "cost": {
        "food": 1,
        "water": 1
    },
    "resourceModifier": {
        "food": 0,
        "water": -1
    },
    "resourceCount": 2,
    "stage":0,
    "stages": [
        4,
        2,
        2
    ]
};

function StartingTiles(props) {
  const offsetX = -75 * props.tileScale;
  const offsetY = 130 * props.tileScale;
  return (
    <div className="StartingTiles">
      <h2>Starting Tiles</h2>
      <p>Where your ordeal begins...</p>
      <div className='StartingTiles-list'>
        <Tile showBack={false} print={props.print} tileScale={props.tileScale} {...coastProps} style={{marginTop: offsetY}}/>
        <Tile showBack={false} print={props.print} tileScale={props.tileScale} {...coastProps} style={{marginLeft: offsetX}} />
        <Tile showBack={false} print={props.print} tileScale={props.tileScale} {...coastProps} style={{marginTop: offsetY, marginLeft: offsetX}} />
        <Tile showBack={false} print={props.print} tileScale={props.tileScale} {...seaProps} style={{marginLeft: offsetX * 7, marginTop: offsetY * 2}} />
      </div>
    </div>
  );
}

export default StartingTiles;