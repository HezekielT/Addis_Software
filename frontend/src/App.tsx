import React from 'react'
import Employee from './components/Employee/Employee';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';

const App:React.FC = () => {

  return (
    // <Provider store={store}>
    <>
      <Navbar />
      <Employee />
    </>
    // </Provider>
  )
}

export default App;
