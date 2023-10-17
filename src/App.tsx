import './App.css';
import { Form, Instructions } from './components';


function App() {
  return (
    <>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <h1 className="text-4xl font-bold mb-5">
            Calcula tu serie
          </h1>

          <Instructions />

          <Form />
        </div>
      </div>
    </>
  )
}

export default App;
