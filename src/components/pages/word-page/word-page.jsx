import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LoadingPage from '../loading-page/loading-page.jsx';
import Search from '../../widgets/search/search'
import HeadingWordPage from '../../widgets/heading-word-page/heading-word-page.jsx'

import './word-page.css'

const WordPage = () => {
  const { word } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error("error");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  if (loading) return <LoadingPage />;
  if (error) return <p>Error</p>;
  //if (error) return <ErrorPage />;
  if (!data) return <p>No data available</p>;


  return (
    <>
      <Search />
      <div className='word-page__container'>
        <HeadingWordPage data={data} />
      </div>
    </>
  )
}

export default WordPage
