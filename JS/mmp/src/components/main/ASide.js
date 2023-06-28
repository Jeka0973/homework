import styles from './ASide.module.css'
import {Link} from 'react-router-dom'
// import LinearProgress from '@mui/material/LinearProgress'
import {rootCategories, queryRootCategories} from '../../const/index'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {actionPromise} from '../../store/PromiseReducer'
import {setText} from '../../store/HeaderTextReducer'
import {gqlFunc} from '../../utils'

function ASide() {
  const dispatch = useDispatch()
  const getCategories = useSelector(state => state.allGoods.getCategories)

  const state = useSelector(state => state)

  const {status, payload} = getCategories || {}

  useEffect(() => {
    //не должен возвращать промис! поэтому пишется функция и тут же потом и вызывается
    async function fetchData() {
      await dispatch(actionPromise('getCategories', gqlFunc(queryRootCategories, rootCategories)))
    }

    fetchData()
  }, [])
  //******************************************************* */

  const handleSubCategory = (subCats, id) => {
    if (subCats !== null && subCats.length) {
      // console.log(`subCats=${subCats}`)
      let currentSubCategory = `getSubCategories_${id}`
      console.log(currentSubCategory)

      async function fetchSubCategories() {
        await dispatch(
          actionPromise(currentSubCategory, gqlFunc(queryRootCategories, {q: `[{"_id":"${id}"}]`}))
        )
      }
      fetchSubCategories()
      console.log(` data == ${JSON.stringify(state.allGoods[currentSubCategory])}`)

      // let data = getSubCategories.payload.CategoryFind

      // for (let i = 0; i < data.length; i++) {
      //   let subCategories = data[i].subCategories

      //   for (let j = 0; j < subCategories.length; j++) {
      //     let subCategory = subCategories[j]
      //     console.log(`subcategory id:   ${subCategory._id}`)
      //     console.log(`subcategory name: &{subCategory.name}`)
      //   }
      // }

      //   data == [{"_id":"64031693d5e3301cba63a54d","name":"Drinks","subCategories":[{"_id":"64174598d5e3301cba63a6a2","name":"Chinese tea"},
      //   {"_id":"641745a6d5e3301cba63a6a3","name":"Teaware"}
      //   ]
      // }]
    } else {
      console.log(`subCats=null or array=0`)
    }
  }

  // () => dispatch(setText(category.name))

  console.log(state)

  return (
    <aside className={styles.aside}>
      <div>
        <ul>
          {status === 'PENDING' || !status ? (
            <p>Loading...</p>
          ) : (
            <div className="aside">
              {payload &&
                payload.CategoryFind &&
                payload.CategoryFind.length &&
                payload.CategoryFind.map(category => (
                  <li>
                    <Link
                      key={category._id}
                      onClick={() => handleSubCategory(category.subCategories, category._id)}
                      to={`/category/${category._id}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
            </div>
          )}
        </ul>
      </div>
    </aside>
  )
}

export default ASide
