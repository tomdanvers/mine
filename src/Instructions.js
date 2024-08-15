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
      <p>Give every player a ship board and one drone token that matches the colour of their ship board. Players place their drone token on their ship board in the space marked 'Drone Bay'.</p>
      <p>Choose a player to take the first turn...</p>
      <h3>Turn Sequence</h3>
      <p>In their turn a player can perform the following actions in this order:</p>
      <ol>
        <li>Use 'start of turn' abilities from ship upgrade cards</li>
        <li>Move a single drone they control</li>
        <li>Mine a single resource</li>
        <li>Purchase ship upgrade cards</li>
        <li>Use 'end of turn' abilities from ship upgrade cards</li>
      </ol>
    </div>
  );
}

export default Instructions;