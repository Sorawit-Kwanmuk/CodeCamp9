import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const handleSubmitLogin = e => {
    e.preventDefault();
    //case success login redirect to / (home)
    history.push('/');
    history.push({ pathname: '/', search: '?name=john', state: { point: 200 } });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='password' />
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
