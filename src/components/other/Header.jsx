import React from 'react';

const Header = ({ data, changeUser }) => {
  
  const username = data?.firstname || 'Admin';

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    changeUser('');
  };

  return (
    <div className='flex flex-col sm:flex-row sm:items-end items-start justify-between gap-3'>
      <h1 className='text-xl sm:text-2xl font-medium'>
        Hello <br />
        <span className='text-2xl sm:text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={logOutUser}
        className='bg-red-600 text-base sm:text-lg font-medium text-white px-4 sm:px-5 py-2 rounded-sm'
      >Log Out
      </button>
    </div>
  );
};

export default Header;