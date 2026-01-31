import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";

const useFriends = () => {
   const { data, isLoading, error } = useQuery({
      queryKey: ["friends"],
      queryFn: getUserFriends,
   });

   return {
      friends: data,
      isLoading,
      error,
   };
};

export default useFriends;
