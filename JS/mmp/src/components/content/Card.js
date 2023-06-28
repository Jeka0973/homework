import styles from './Card.module.css'
import ButtonRef from '../UI/ButtonRef'

function Card() {
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.goodPhoto}
          src="http://shop-roles.node.ed.asmer.org.ua/images/aa79481b72ce8f9375450f3bf6693b77"
        />
      </div>
      <div>
        <h2>Motorola Razr 5G 8/256GB Graphite</h2>
      </div>

      <div>
        <p>2500&nbsp;₴</p>
      </div>

      <div>
        <ButtonRef />
        {/* <a href="#">&nbsp;Вставить button UI&nbsp;</a> */}
      </div>
    </div>
  )
}

export default Card
