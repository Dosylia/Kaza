import './card.scss'

function Card({ cover, name, id }) {
  return (
    <article>
      <img src={cover} alt={name} />
      <div>
        <p>{name}</p>
      </div>
    </article>
  )
}

export default Card
