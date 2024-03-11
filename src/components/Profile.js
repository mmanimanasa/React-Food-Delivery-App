import { Component} from "react";
import { Github_API_User,Github_UserName,options,Linkedin_Link,Email_Link,Github_Link } from "../utils/constants";
import profile from "../Images/Profile.jpeg";
import { SiGmail, SiLinkedin, SiGithub} from "react-icons/si";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
  }
  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { userInfo } = this.state; 
    console.log(userInfo);
    return (
      <>
        {userInfo.name === "" ? null : (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <div className="profile-user-card">
                <a
                  href={userInfo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="profile-user-img"
                    src={profile}
                    alt={userInfo.login}
                    title={userInfo.login}
                  />
                </a>
                <p className="profile-user-bio">
                  React.js | Angular.js | Angular | JavaScript | HTML | CSS |
                  FrontEnd Developer
                </p>
                <div className="social-media-container">
                  <a
                    href={Linkedin_Link}
                    title="Follow me on Linkedin"
                    className="icon-button linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <SiLinkedin title="Follow me on Linkedin" />
                    </i>
                  </a>
                  <a
                    href={Github_Link}
                    title="Follow me on Github"
                    className="icon-button github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <SiGithub title="Follow me on Github" />
                    </i>
                  </a>
                  <a
                    href={Email_Link}
                    title="Any Query! Mail me"
                    className="icon-button email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <SiGmail title="Any Query! Mail me" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Food Delivery App Github Repository
              </h1>
              <h1 className="repo-h1">
                <a
                  href="https://github.com/mmanimanasa/React-Learning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Food Delivery App
                </a>
              </h1>
              <h3>
                This is a simple Food delivery App created by using React.js and
                Parcel.js
              </h3>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Profile;