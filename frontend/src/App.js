import logo from './logo.svg';
import './App.css';
import Content from './components/content/Content';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      < Content />
    </Router>

  );
}

export default App;