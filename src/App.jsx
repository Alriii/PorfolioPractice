import "./App.css";
import profile from "./assets/Valid Photo.png";

function App() {
  return (
    <div className="App">
      
      <h1>👋 Welcome to My First React App</h1>
      <img src={profile} alt="Ken" className="profile" />
      <h2>Hi! My name is Ken.</h2>

      <p>
        This is my first React application. I am currently learning React and
        building projects to improve my front-end development skills.
      </p>

      <h3>About Me</h3>

      <ul>
        <li>🎓 Course: Bachelor of Science in Information Technology</li>
        <li>💻 Currently Learning: React</li>
        <li>🚀 Goal: Pass this course and become a skilled developer.</li>
      </ul>

      <button onClick={() => alert("Thank you for visiting my first React app!")}>
        Click Me!
      </button>
    </div>
  );
}

export default App;