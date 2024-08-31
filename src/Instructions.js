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
      <h4>1. Use 'start of turn' abilities</h4>
      <p>The player can use any ship upgrade abilities which specify they are used at the start of the player turn. The player can use as many of these abilites as they like.</p>
      <p>Cards with the 'discard' ribbon are discarded after use.</p>
      <h4>2. Move a drone</h4>
      <h4>3. Mine a resource</h4>
      <h4>4. Purchase ship upgrade cards</h4>
      <h4>5. Use 'end of turn' abilities</h4>
      <p>The player can use any ship upgrade abilities which specify they are used at the end of the player turn. The player can use as many of these abilites as they like.</p>
      <p>Cards with the 'discard' ribbon are discarded after use.</p>
      <hr />
      <h2>DEV TASKS</h2>
      <hr />
      <h2>GAMEPLAY TASKS</h2>
      <p>How to make the card placement or act of mining feel more interesting? Somehow use asteroid cards you've claimed?</p>
      <p>Consider making upgrade cards tiered? Like different decks of different quality? Bronze, Silver, Gold</p>
      <p><s>How does the player burn ship upgrade pool? If 3 cards are useless then can they be binned/replaced? What is the cost?</s> Maybe discard a card from stack of mined asteroid layers?</p>
      <p><s>Dump idea of multiple drones? Replace drone bay with something else? Advanced drone bay. What does it do?</s> Try "The player can perform the "mine resource" action even if their drone moved. Additionally this player can't be the target of the "[SC:5]" upgrade"</p>
      <hr />
    </div>
  );
}

export default Instructions;