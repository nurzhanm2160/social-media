import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App({posts, dialogs, messages, addPost}) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='profile' element={<Profile posts={posts} addPost={addPost} />}/>
          <Route path='dialogs' element={<Dialogs dialogs={dialogs} messages={messages} />} />
        </Routes>
      </div>
    </div>

  );
}




export default App;
