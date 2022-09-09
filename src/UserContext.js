import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(()=> {
    async function autoLogin(){
      const token = window.localStorage.getItem('token')
      if(token){
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if(!response.ok) throw new Error('TOKEN INVALIDO')
          //const json = await response.json()
          await getUser(token)
         
        } catch (err) {
          
        }finally{
          setLoading(false)

        }
      }
    }
    autoLogin();
  },[])

    async function userLogout(){
      setData(null);
      setError(null)
      setLoading(false)
      setLogin(false)
      window.localStorage.removeItem('token')
    }


  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};