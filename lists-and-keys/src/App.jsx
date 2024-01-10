import { useEffect, useState } from "react";

export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  useEffect(() => {
    handleGetToDoItems();
  }, []);
  async function handleGetToDoItems(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setToDoItems(data);
  }
  //make list of users
  const users = Array.from(
    new Set(toDoItems.map((item) => item.userId.toString()))
  ).filter(Boolean);
  //set selected user to usestate
  const [selectedUser, setSelectedUser] = useState(0);
  //filter todo list to include only selected user
  const itemList = toDoItems
    .filter(
      (item) => selectedUser == 0 || item.userId.toString() == selectedUser
    )
    .map((item, i) => <li key={item.title + i}>{item.title}</li>);
  return (
    <div>
      <label htmlFor="user">Select user</label>
      <select
        name="user"
        id="user"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="0">All users</option>
        {users.map((user, i) => (
          <option key={i} value={user}>
            {user}
          </option>
        ))}
      </select>
      <h1>toDOOO list</h1>
      <ul>{itemList}</ul>
    </div>
  );
}
