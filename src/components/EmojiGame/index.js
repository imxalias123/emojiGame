import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLossCard'

class EmojiGame extends Component {
  state = {
    playingGame: true,
    clickedEmojiList: [],
    topScore: 0,
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > topScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, playingGame: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiList = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="wrapping-btn">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            eachEmoji={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGameAgain = () => {
    this.setState({clickedEmojiList: [], playingGame: true})
  }

  scoreCard = () => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props

    const wonGame = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLossCard
        wonGame={wonGame}
        onClickPlayAgain={this.resetGameAgain}
        score={clickedEmojiList.length}
      />
    )
  }

  render() {
    const {playingGame, clickedEmojiList, topScore} = this.state
    return (
      <div>
        <NavBar
          playingGame={playingGame}
          score={clickedEmojiList.length}
          topScore={topScore}
        />
        <div className="bottom-container">
          {playingGame ? this.emojiList() : this.scoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
