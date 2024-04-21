import './card.scss'

function Card({ cover, name, id }) {
  return (
    <article key={id}>
      <div class="image-container">
        <img src={cover} alt={name} />
        <p>{name}</p>
      </div>
    </article>
  )
}

export default Card
