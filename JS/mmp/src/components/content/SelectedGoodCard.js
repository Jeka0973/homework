import styles from './SelectedGoodCard.module.css'
import Button from '../UI/Button'

function SelectedGoodCard() {
  return (
    <div className={styles.oneGood}>
      <div>
        <h2>тут будет слайдер(flex)</h2>
      </div>
      <div>
        <h2 class={styles.goodName}>Ороситель Verto регулированный 16 отверстий до 336 м²</h2>
      </div>
      <div>
        <p class={styles.descr}>
          Количество форсунок 16 Гидромотор Нет Максимальная площадь покрытия 336 кв м Страна
          производитель Китай Дополнительные характеристики Простая регулировка диапазона полива
          Прочный пластик, устойчивый к повреждениям
        </p>
      </div>
      <div>
        <p class={styles.goodPrice}>565&nbsp;₴</p>
      </div>

      <div className={styles.goodSale}>
        <Button />
      </div>
    </div>
  )
}

export default SelectedGoodCard
