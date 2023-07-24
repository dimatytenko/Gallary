declare global {
  interface Window {
    _env_: {
      REACT_APP_SERVER_URL: string | undefined;
      REACT_APP_CLIENT_ID: string | undefined;
    };
  }
}

export const SERVER_URL =
  typeof window !== 'undefined' && window._env_ ? window._env_.REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL;

export const CLIENT_ID =
  typeof window !== 'undefined' && window._env_ ? window._env_.REACT_APP_CLIENT_ID : process.env.REACT_APP_CLIENT_ID;
