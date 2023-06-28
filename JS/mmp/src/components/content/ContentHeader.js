import styles from './ContentHeader.module.css'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setText} from '../../store/HeaderTextReducer'

function ContentHeader() {
  // const text = useSelector(state => state.contentHeader.text)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(`Текст изменился на ${text}`)
  // }, [text])

  return (
    <div className="contentHeader">
      <h2>{useSelector(state => state.contentHeader.text)}</h2>
    </div>
  )
}
export default ContentHeader
