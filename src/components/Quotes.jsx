import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });

  const getQuotes = async () => {
    const quote = await fetch('https://random-math-quote-api.herokuapp.com/');
    setQuote(quote);
    setQuote();
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <h2>Math Quotes</h2>
      <p>{quote}</p>
    </>
  );
};

export default Quote;
