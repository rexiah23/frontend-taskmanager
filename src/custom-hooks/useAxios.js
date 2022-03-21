import { useReducer, useCallback } from 'react';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
  };
  
  const httpReducer = (curHttpState, action) => {
    switch (action.type) {
      case 'SEND':
        return {
          loading: true,
          error: null,
          data: null,
          extra: null,
          identifier: action.identifier
        };
      case 'RESPONSE':
        return {
          ...curHttpState,
          loading: false,
          data: action.responseData,
          extra: action.extra
        };
      case 'ERROR':
        return { loading: false, error: action.errorMessage };
      case 'CLEAR':
        return initialState;
      default:
        throw new Error('Should not be reached!');
    }
  };

const useAxios = () => {
    
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), []);

  const sendRequest = useCallback(
      (url, method, body=null, headers=null, reqExtra=null, reqIdentifier=null) => {
        dispatchHttp({ type: 'SEND', identifier: reqIdentifier });
        axios[method](url, headers, body)
            .then((res) => {
                dispatchHttp({
                    type: 'RESPONSE',
                    responseData: res,
                    extra: reqExtra
                })
            })
            .catch((err) => {
                dispatchHttp({
                    type: 'ERROR',
                    errorMessage: err
                });
            })
    }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear
  };
};

export default useAxios;