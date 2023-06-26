import styles from './ASide.module.css'
import {rootCategories, queryRootCategories} from '../../const/index'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {actionPromise} from '../../store/PromiseReducer'
import {gqlFunc} from '../../utils'

function ASide() {
  const dispatch = useDispatch()
  //const getCategories = useSelector(state => state.allGoods.getCategories)
  const state = useSelector(state => state)
  // console.log(state)

  //const {status, payload} = getCategories || {}

  useEffect(
    () => dispatch(actionPromise('getCategories', gqlFunc(queryRootCategories, rootCategories))),
    [dispatch]
  )
  console.log(JSON.stringify(state))

  return (
    <aside className={styles.aside}>
      <div>
        <ul>
          <li>Категория 1</li>
        </ul>
      </div>
    </aside>
  )
}
export default ASide
