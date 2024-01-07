
import './App.css'
import Counter from './component/Counter'
import { Provider } from 'react-redux'
import store from './Redux/Store'


function App() {
 

  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default App
