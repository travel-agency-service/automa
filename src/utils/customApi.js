import secrets from 'customSecret';

export async function fetchApi(path, options = {}) {
  const urlPath = path.startsWith('/') ? path : `/${path}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options?.headers || {}),
  };

  return fetch(`${secrets.baseApiUrl}${urlPath}`, {
    ...options,
    headers,
  });
}
