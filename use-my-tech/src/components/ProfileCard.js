import React from "react";
import { useSelector } from "react-redux";

const dummyUser = {
  name: "Sarah",
  posts: 5,
  posts_with_offers: 1
};

const user = {
  name: "Sarah",
  posts: 5,
  posts_with_offers: 1
};

const ProfileCard = () => {

  let user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <div className="img__box">
        <img src="" alt="User Profile Picter" />
      </div>
      <h1 className="user__name">{user.name}</h1>
      <p className="user_totalPosts">{user.posts}</p>

      <p className="user_offeredPosts">{user.postsWithOffers}</p>

    </div>
  );
};

export default ProfileCard;
