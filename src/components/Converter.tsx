import { useState } from 'react';

const Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const converterToRoman = () => {
    let number = parseInt(inputValue);
    if (number < 1 || number > 3999) {
      setResult('Digite um número entre 1 e 3999.');
      return;
    }

    let roman = '';
    const romanNumbers: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicNumbers: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < romanNumbers.length; i++) {
      while (number >= arabicNumbers[i]) {
        roman += romanNumbers[i];
        number -= arabicNumbers[i];
      }
    }

    setResult('O número romano é: ' + roman);
  };

  const converterToArabic = () => {
    const roman = inputValue.toUpperCase();
    let arabic = 0;
    const letters: string[] = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const values: number[] = [1, 5, 10, 50, 100, 500, 1000];

    for (let i = 0; i < roman.length; i++) {
      const current = values[letters.indexOf(roman[i])];
      const next = values[letters.indexOf(roman[i + 1])];

      if (next && current < next) {
        arabic -= current;
      } else {
        arabic += current;
      }
    }

    setResult('O número arábico é: ' + arabic);
  };

  return (
    <div className='converter'>
      <h1>Conversor de Números Romanos</h1>

      <input type="text" id="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite um número" />

      <button onClick={converterToRoman}>Converter para Romano</button>
      <button onClick={converterToArabic}>Converter para Arábico</button>
      
      <p>{result}</p>
    </div>
  );
};

export default Converter;
