import "./App.css";
import {useState,useEffect} from 'react'
import Form from "./components/form/Form";
import Cards from "./components/cards/Cards";

function App() {
  const [users, setUsers] = useState([]);
  // use the operating system theme  
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) return "dark";
    return "light";
  });

  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
    if (theme === "light") {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  // avoid duplicate data
  const saveUser = (user) => {
    if (!users.some(({ fullName }) => fullName === user.fullName)) {
      setUsers([...users, user]);
    }
  };

  // keeps users in the storage
  useEffect(() => {
    const users = localStorage.getItem("users");
    users && setUsers(JSON.parse(users));
  }, []);

  // save users in storage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <main>
      <div className="container p-10 ">
        <button
          className="bg-blue-400 px-2 py-1 m-4 text-white rounded-md hover:bg-blue-600"
          onClick={handleTheme}
        >
          Cambiar tema
        </button>
        <h1 className="text-center font-bold text-black mb-4 dark:text-white">
          Bienvenido
        </h1>
        <Form saveUser={saveUser} />
        <Cards users={users} setUsers={setUsers} />
      </div>
    </main>
  );
}

export default App;
