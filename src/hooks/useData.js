import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useData() {
  const [advice, setAdvice] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isNewAdvice, setIsNewAdvice] = useState(false);

  useEffect(() => {
    async function getAdvice() {
      try {
        const response = await axios.get('https://stoic-quotes.com/api/quote');

        const id = response.headers['content-length'];
        const { text, author } = response.data;

        setAdvice({ id, text, author });
      } catch (error) {
        setHasError(true);
      }
    }

    getAdvice();
    setHasError(false);
  }, [isNewAdvice]);

  return { advice, hasError, setIsNewAdvice, isNewAdvice };
}
