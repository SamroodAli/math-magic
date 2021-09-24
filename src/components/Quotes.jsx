import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quote = () => {
  const [content, setContent] = useState({ quote: 'Loading', author: '' });

  const getQuotes = async () => {
    const { data } = await axios.get('https://random-math-quote-api.herokuapp.com/');
    setContent(data);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const { quote, author } = content;
  return (
    <>
      <h2>Math Quotes</h2>
      <p>{quote}</p>
      <p>{author}</p>
    </>
  );
};

export default Quote;
