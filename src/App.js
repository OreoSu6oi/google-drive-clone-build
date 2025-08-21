import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar'

function App() {
  //authenication on for our web page

  return (
    <div className="App">
      {/* header */}
      <Header />
      <Sidebar />
      
      {/* auth=true
      sidebar
      fileView
      sideIcons
      */}

      {/* no auth: log in */}
    </div>
  );
}

export default App;
