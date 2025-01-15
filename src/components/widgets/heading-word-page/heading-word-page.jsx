import wikipediaLogo from '../../../assets/img/wikipedia-logo.svg'

import './heading-word-page.css'

const HeadingWordPage = ({ data }) => {

  return (
    <>
      <section className='heading-wp'>
        <h1>Meaning of <strong>{data[0]?.word}</strong> in English</h1>

        <ul className='heading-wp__list'>
          {data[0]?.sourceUrls[0] && (
            <li className='heading-wp__item'>
              <a href={data[0]?.sourceUrls[0]} target='_blank'>
                <img src={wikipediaLogo} alt="wikipedia logo" />
              </a>
            </li>
          )}

          {data[0]?.sourceUrls[1] && (
            <li className='heading-wp__item'>
              <a href={data[0]?.sourceUrls[1]} target='_blank'>
                <img src={wikipediaLogo} alt="wikipedia logo" />
              </a>
            </li>
          )}
        </ul>
      </section>
    </>)
}

export default HeadingWordPage;
