import styles from './Basket.module.css'
import Button from '../UI/Button'
import DecreaseButton from '../UI/Button'
import IncreaseButton from '../UI/Button'
import DeleteBasketGoodButton from '../UI/Button'

function Basket() {
  return (
    <div className={styles.basket}>
      {/*map-ом сгенерим rowOneGood */}
      <div className={styles.rowOneGood}>
        <div>
          <img
            className={styles.goodPhoto}
            src="http://shop-roles.node.ed.asmer.org.ua/images/320ccb30bf635d717dbc150ed8e39f01"
          />
        </div>
        <div className={styles.namePriceWrapper}>
          <div>
            <h2 className={styles.goodName}>Виски Glengoyne 50yo 0,725 л</h2>
          </div>
          <div>
            <p className={styles.goodPrice}>1250&nbsp;₴</p>
          </div>
        </div>

        <div className={styles.buttonsWrapper}>
          <div>
            {/* <DecreaseButton /> */}
            <p>-</p>
          </div>
          <div>
            <input type="text" className={styles.goodCount} size="2" />
          </div>
          <div>
            {/* <IncreaseButton /> */}
            <p>+</p>
          </div>
        </div>
        <div>
          <p className={styles.goodSumm}>1250&nbsp;₴</p>
        </div>
        <div>
          {/* <DeleteBasketGoodButton /> */}
          <p>✕</p>
        </div>
      </div>
      <div>
        <p className={styles.totalSumm}>Итого:&nbsp;1250&nbsp;₴</p>
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}

export default Basket
