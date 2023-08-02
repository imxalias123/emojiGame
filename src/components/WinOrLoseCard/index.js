// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {wonGame, score, onClickPlayAgain} = props
  const wonOrLossText = wonGame ? 'You Won' : 'You Lose'
  const ScoreText = wonGame ? 'Best Score' : 'Score'
  return (
    <div className="won-or-loss-card">
      <div>
        <h1>{wonOrLossText}</h1>
        <p>{ScoreText}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLossCard
