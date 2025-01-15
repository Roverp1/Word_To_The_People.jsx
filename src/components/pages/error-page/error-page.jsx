import Search from '../../widgets/search/search';

import './error-page.css';

const ErrorPage = ({ onRetry }) => {
  return (
    <>
      <Search onRetry={onRetry} />
      <p>Error</p>
    </>
  )
}

export default ErrorPage;
