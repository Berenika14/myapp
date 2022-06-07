import useSWR from "swr";
import fetcher from "./fetcher";

export default useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

const usePlayList = () => {
  const { data, error } = useSWR("/playlist", fetcher);
  return {
    playlists: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
