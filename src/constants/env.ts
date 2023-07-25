declare global {
  interface Window {
    _env_: {
      REACT_APP_SERVER_URL: string | undefined;
      REACT_APP_SERVER_AUTH_URL: string | undefined;
      REACT_APP_CLIENT_ID: string | undefined;
      REACT_APP_REDIRECT_URL: string | undefined;
      REACT_APP_CLIENT_SECRET_ID: string | undefined;
    };
  }
}

export const SERVER_URL =
  typeof window !== 'undefined' && window._env_ ? window._env_.REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL;

export const SERVER_AUTH_URL =
  typeof window !== 'undefined' && window._env_
    ? window._env_.REACT_APP_SERVER_AUTH_URL
    : process.env.REACT_APP_SERVER_AUTH_URL;

export const CLIENT_ID =
  typeof window !== 'undefined' && window._env_ ? window._env_.REACT_APP_CLIENT_ID : process.env.REACT_APP_CLIENT_ID;

export const CLIENT_SECRET_ID =
  typeof window !== 'undefined' && window._env_
    ? window._env_.REACT_APP_CLIENT_SECRET_ID
    : process.env.REACT_APP_CLIENT_SECRET_ID;

export const REDIRECT_URL =
  typeof window !== 'undefined' && window._env_
    ? window._env_.REACT_APP_REDIRECT_URL
    : process.env.REACT_APP_REDIRECT_URL;

// export const REDIRECT_URL = 'http://localhost:3000/auth';
