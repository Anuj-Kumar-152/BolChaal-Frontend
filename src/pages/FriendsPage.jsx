import FriendCard from "../components/FriendCard";
import useFriends from "../hooks/useFriends";

const FriendsPage = () => {
   const { friends, isLoading } = useFriends();

   if (isLoading) return <p>Loading friends...</p>;

   return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {friends?.map((friend) => (
            <FriendCard key={friend._id} friend={friend} />
         ))}
      </div>
   );
};

export default FriendsPage;
