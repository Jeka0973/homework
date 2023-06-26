import styles from './AutorizeForm.module.css'
import Button from '../UI/Button'

function AutorizeForm() {
  return (
    <div className={styles.authForm}>
      <div>
        <label for="loginInput">Login</label>
        <input type="text" value="login" className={styles.loginInput} />
      </div>
      <div>
        <label for="pwdInput">Password</label>
        <input type="password" value="login" className={styles.pwdInput} />
        <input type="checkbox" className={styles.chkBoxPwd} />
      </div>
      <div>
        <Button />
        <Button />
      </div>
    </div>
  )
}
export default AutorizeForm
