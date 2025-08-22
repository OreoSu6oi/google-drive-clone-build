import './App.css';
import FilesView from './components/filesView/FilesView';
import Header from './components/header';
import Sidebar from './components/sidebar'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

function App() {
  //authenication on for our web page
  const [user, setUser] = useState()

  const handleLogin = () => {
    if (!user) {
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user)
        console.log('Full user object:', result.user)
        console.log('User photo URL:', result.user.photoURL)
        console.log('User display name:', result.user.displayName)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      signOut(auth).then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;