import { useState } from 'react';
import useSerieCalculator from '../hooks/useSerieCalculator';

const Form = () => {
  const [value, setValue] = useState('');
  const { result, setCalculate } = useSerieCalculator();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = +e.target.value;
    if(!isNaN(n) && n >= 0)
      setCalculate(n);

    setValue(e.target.value);
  }

  return (
    <>
      <div className='mb-0 space-y-6'>
        <div>
          <label htmlFor="n">Introduzca el número n</label>
          <div className="mt-1">
            <input className='w-full border focus:outline-none focus:border-purple-700 px-3 py-2 rounded-lg shadow-sm' type='text' placeholder='Ingrese un número' name='serie-n' value={value} onChange={onChange} />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">
        Resultado:
      </h2>
      <span>{result}</span>
    </>
  )
}

export default Form;