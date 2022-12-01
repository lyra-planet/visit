import {blogListTimeLine} from "../../../lib/timeLineFormat";
import Loading from "./loading"
import Item from "./item";
import useAllFriend from "../../../hooks/front/useAllFriend";
const index = () => {
  const friends = useAllFriend()
  return (
    <div className="py-8 px-10 space-y-10 w-full justify-center">
        <section>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>Lyra.Planet</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>好友</p>
            </h1>
        </section>
    <section className="w-full grid grid-cols-1 justify-between  lg:grid-cols-2 2xl:grid-cols-3 pb-10">
    {friends !== false ? (
        friends.map((post) => (
                <Item friend={post}/>
        ))
      ) : (
        <Loading/>
      )}
    </section>
    </div>
  );
};

export default index;
