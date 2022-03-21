import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  const fetchData = (url, method, body, headers) => {
      axios[method](url, JSON.parse(headers), JSON.parse(body))
          .then((res) => {
              setResponse(res.data);
          })
          .catch((err) => {
              setError(err);
          })
          .finally(() => {
              setloading(false);
          });
  };

    useEffect(() => {
        fetchData(url, method, body, headers);
    }, [url, method, body, headers]);

    return { response, error, loading, fetchData };
};

export default useAxios;