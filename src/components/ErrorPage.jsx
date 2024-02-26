import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return <h1>Ohoh, ada error !</h1>;
}

export default ErrorPage;
