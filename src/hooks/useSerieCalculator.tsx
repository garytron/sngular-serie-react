import { useState } from 'react';
import { Serie } from '../utils/Serie';

const useSerieCalculator = () => {
  const [result, setResult] = useState<number>(0);

  const setCalculate = (n: number) => {
    if(n <= 0) return setResult(0);

    const serie = new Serie(n);
    const result = serie.calculate();
    setResult(result);
  };

  return { result, setCalculate };
}

export default useSerieCalculator;