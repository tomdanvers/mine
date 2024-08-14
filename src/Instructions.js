import './Instructions.scss';

function Instructions(props) {
  return (
    <div className="Instructions">
      <h1>Mine!</h1>
      <h2>How To Play</h2>
      <h3>Setup</h3>
      <p>Shuffle the asteroid card decks (crust, mantle and core) and shuffle the ship upgrades deck.</p>
      <p>Create asteroid card stacks based on the number of players:</p>
      <ul>
        <li>2 player game - 6 stacks</li>
        <li>3 player game - 8 stacks</li>
        <li>4 player game - 10 stacks</li>
      </ul>
      <p>To create an asteroid card stack take a core card and place it in the gaming area, place a mantle card on top of the core card and finally place a crust card on top of the mantle card.</p>
      <p>Place the ship upgrades deck next to the asteroid card stacks. Turn the following number of cards face up:</p>
      <ul>
        <li>2 player game - 3 cards</li>
        <li>3 player game - 4 cards</li>
        <li>4 player game - 5 cards</li>
      </ul>
    </div>
  );
}

export default Instructions;