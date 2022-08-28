import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Logo" />
      </header>
      <nav className="nav">
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
        <div>
          News
        </div>
        <div>
          Music
        </div>
        <div>
          Settings
        </div>
      </nav>
      <div className="content">
        Main content
        <div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" alt="Background" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>

  );
}




export default App;
