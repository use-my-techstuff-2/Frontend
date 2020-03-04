import React from "react";

const user = {
  name: "Sarah",
  posts: 5,
  posts_with_offers: 1
};

const ProfileCard = () => {
  return (
    <div>
      <div className="img__box">
        <img src="" alt="User Profile Picter" />
      </div>
      <h1 className="user__name">{user.name}</h1>
      <p className="user_totalPosts">{user.posts}</p>
      <p className="user_offeredPosts">{user.posts_with_offers}</p>
    </div>
  );
};

export default ProfileCard;
