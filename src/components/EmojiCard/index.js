// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={onClickEmoji}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
