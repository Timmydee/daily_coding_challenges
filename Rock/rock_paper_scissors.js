function rockPaperScissors(player1, player2) {
  if (player1 === player2) return 'Tie';
  
  const wins = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper'
  };
  
  return wins[player1] === player2 ? "Player 1 wins" : "Player 2 wins";
}