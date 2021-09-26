import { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImg from '../assets/default.jpg';

const useQuotes = () => {
  const [quote, setQuote] = useState('Loading');
  const [author, setAuthor] = useState('');
  const [authorImg, setAuthorImg] = useState('');
  const [loading, setLoading] = useState(true);

  const getQuotes = async () => {
    setQuote('Loading');
    const { data } = await axios.get('https://random-math-quote-api.herokuapp.com/');
    setQuote(data.quote);
    setAuthor(data.author);
    setLoading(false);
  };

  const fixAuthorName = (name) => name.split(' ').map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join('_');

  const getAuthor = async () => {
    const authorName = fixAuthorName(author);
    const data = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&titles=${authorName}&prop=pageimages&pithumbsize=400&origin=*&format=json`);
    try {
      const pageData = data.data.query.pages;
      const pageInfo = Object.values(pageData)[0];
      setAuthorImg(pageInfo.thumbnail.source);
    } catch (e) {
      setAuthorImg(defaultImg);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getQuotes();
    }
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getAuthor();
    }
    return () => {
      isMounted = false;
    };
  }, [author]);

  return {
    loading,
    author,
    authorImg,
    quote,
    getQuotes,
  };
};

export default useQuotes;
