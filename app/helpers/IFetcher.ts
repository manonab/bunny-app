export const fetcher = (url: string, accessToken: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(res => res.json());
