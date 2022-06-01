import style from './App.module.css'
import Header from './Header'
import RouteText from './RouteText'

const App = () => {
  
  return (
      <div className={style.app}>
        <div className={style.browser}>
          <div className={style.tabs}>
            <Header/>
          </div>
          
          <div className={style.viewport}>
            <RouteText/>
          </div>
        </div>
      </div>
  )
}

export default App
