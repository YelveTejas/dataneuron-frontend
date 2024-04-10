import logo from './logo.svg';
import './App.css';
import './style/resizable.css'
import './style/splitter.css'
import ResizableLayout from './component/Resizable';
import ResizablePanelsComponent from './component/Resizable';
import MyResizableLayout from './component/Resizable';

function App() {
  return (
    <div className="App">
     <MyResizableLayout/>
    </div>
  );
}

export default App;
