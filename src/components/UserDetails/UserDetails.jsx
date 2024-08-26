import "./UserDetails.css";

export default function UserCard({ userData }) {
  return (
    <>
      <section className="user-card">
        <div className="user__header">
          <div className="user__img-container">
            {userData && userData.avatar_url ? (
              <img className="user__img" src={userData.avatar_url} alt={`Avatar of ${userData.login}`} />
            ) : (
              <div className="user__placeholder-circle"></div>
            )}
          </div>
          <div className="user__header-info">
            <div className="name_title">
              <h1 className="user__name"> {userData?.name ? userData.name : userData?.login} </h1>
              <h3 className="user__handle">@{userData?.login}</h3>
            </div>
            <h3 className="user__date-joined">
              Joined{" "}
              {userData && userData.created_at
                ? new Date(userData.created_at)
                    .toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(",", "")
                : "Date not available"}
            </h3>
          </div>
        </div>
        <p className={`user__description ${ userData?.bio ? "" : "no-bio-opacity" }`}>
          {userData?.bio || "This profile has no bio"}
        </p>
        <div className="user-stats">
          <div className="user-stats__repos">
            <p className="user-stats__label">Repos</p>
            <p className="user-stats__info">
              {userData ? userData.public_repos : 0}
            </p>
          </div>
          <div className="user-stats__followers">
            <p className={`user-stats__label`}>Followers</p>
            <p className={`user-stats__info`}>
              {userData ? userData.followers : 0}
            </p>
          </div>
          <div className="user-stats__following">
            <p className={`user-stats__label`}
            >Following</p>
            <p className={`user-stats__info`}>
              {userData ? userData.following : 0}
            </p>
          </div>
        </div>
        <div className="user-links">
          <div className="links-container">
            <div className={`user-links__location user-link__container ${!userData?.location ? "not-available" : ""}`}>
              <img src="../../../public/imgs/icon-location.svg" alt="location"
                className={`location-icon ${userData?.company ? "" : "not-available"}`}
              />
              <p className={`user-link__name`}>
                {userData?.location || "Not Available"}
              </p>
            </div>
            <div className={`user-links__website user-link__container ${!userData?.blog ? "not-available" : ""}`}>              
              <img src="../../../public/imgs/icon-website.svg" alt="link"
                className={`link-icon ${userData?.company ? "" : "not-available"}`}            
              />
              {userData?.blog ? (
                <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                  <p className={`user-link__name`}>{userData.blog}</p>
                </a>
              ) : (
                <p
                  className={`user-link__name ${
                    userData?.blog ? "" : "not-available"}`}
                >
                  Not Available
                </p>
              )}
            </div>
          </div>
          <div className="links-container">
            <div className="user-links__social user-link__container">
              <img src="../../../public/imgs/icon-twitter.svg" alt="social"
                className={`social-icon ${userData?.company ? "" : "not-available"}`}            
              />            
              <p
                className={`user-link__name ${userData?.twitter_username ? "" : "not-available"
                }`}
              >
                {userData?.twitter_username ? (
                  <a
                    href={`https://twitter.com/${userData.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.twitter_username}
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
            <div className="user-links__company user-link__container">
              <img src="../../../public/imgs/icon-company.svg" alt="company"
                className={`company-icon ${
                  userData?.company ? "" : "not-available"
                }`}            
              />            
              <p
                className={`user-link__name ${
                  userData?.company ? "" : "not-available"
                }`}
              >
                {userData?.company || "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
