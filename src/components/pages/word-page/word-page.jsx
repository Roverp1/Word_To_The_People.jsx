import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import LineBold from "../../ui/line-bold/line-bold.jsx";
import PartOfSpeechSection from "../../widgets/part-of-speech-section/part-of-speech-section.jsx";
import Line from "../../ui/line/line.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import ErrorPage from "../error-page/error-page.jsx";
import Search from "../../widgets/search/search";
import HeadingWordPage from "../../widgets/heading-word-page/heading-word-page.jsx";

import "./word-page.css";

const WordPage = () => {
  const { word } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
        );
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
  if (error) return <ErrorPage onRetry={() => setError(null)} />;
  if (!data) return <p>No data available</p>;

  return (
    <>
      <Search />
      <div className="word-page__container">
        <HeadingWordPage data={data} />
        <Line />
        <PartOfSpeechSection data={data} />
      </div>
    </>
  );
};

export default WordPage;
