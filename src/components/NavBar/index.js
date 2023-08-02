import './index.css'

const NavBar = props => {
  const {playingGame, score, topScore} = props
  return (
    <nav className="nav-container">
      <div className="separation">
        <div className="flex-logo-emoji">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
          <p>Emoji Game</p>
        </div>
        {playingGame && (
          <div className="flex-nav-score">
            <p className="score">Score: {score}</p>
            <p className="top">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
