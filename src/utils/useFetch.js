import { useState, useEffect, useCallback } from 'react';
import { httpService, httpDetailPage } from '../utils/httpService';

function useFetch(query, page, dataId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [jobData, setJobData] = useState({});


  const sendByPage = useCallback(async () => {
    if (!query && page > 0) {
      try {
        setError(false);
        setLoading(true);
        const res = await httpService.get(`?page=${page}`);
        setList((prev) => [...new Set([...prev, ...res.data])]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    }
  }, [query, page]);

  const sendByQuery = useCallback(async () => {
    if (query) {
      try {
        setError(false);
        const res = await httpService.get(
          `?description=${query.desc}&location=${query.location}&full_time=${query.option}`
        );
        setList(res.data);
      } catch (err) {
        setError(err);
      }
    }
  }, [query]);

  const sendbyDataId = useCallback(async () => {
    if (dataId) {
      try {
        setError(false);
        const res = await httpDetailPage.get(`/${dataId}`);
        setJobData(res.data);
      } catch (err) {
        setError(err);
      }
    }
  }, [dataId]);

  useEffect(() => {
    sendByPage(page);
  }, [sendByPage, page]);

  useEffect(() => {
    sendByQuery(query);
  }, [sendByQuery, query]);

  useEffect(() => {
    sendbyDataId(dataId);
  }, [sendbyDataId, dataId]);

  return { loading, error, list, jobData };
}

export default useFetch;
