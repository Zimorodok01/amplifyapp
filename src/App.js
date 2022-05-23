import { Provider } from 'react-redux';
import './App.css';
import Entre from './components/Enter';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Entre />
      </div>
    </Provider>

  );
}

export default App;
