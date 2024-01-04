import React, { useState } from 'react';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import './App.css';
function App() {
  const [users, setUsers] = useState([]);
  const [isAddingUser, setAddingUser] = useState(false);
  const [filter, setFilter] = useState('');

  const handleAddUserClick = () => {
    setAddingUser(true);
  };

  const handleSaveUser = (newUser) => {
    setUsers([...users, newUser]);
    setAddingUser(false);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className='bg-green-50 w-screen h-screen'>
      <h1 className='text-center text-4xl font-medium py-10'>User Management App</h1>
      {isAddingUser ? (
        <UserForm onSave={handleSaveUser} />
      ) : (
        <UserTable users={users} onAddUserClick={handleAddUserClick} onFilterChange={handleFilterChange} />
      )}
    </div>
  );
}

export default App;