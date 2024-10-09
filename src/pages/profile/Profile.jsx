import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i.pinimg.com/736x/53/44/a3/5344a38e162ad1dedf1057542f08d112.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pinimg.com/564x/61/9e/31/619e3108a292a8f5dc963b0876209c2f.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            {/* <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a> */}
            <a href="https://www.instagram.com/siddhantingole45/">
              <InstagramIcon fontSize="large" />
            </a>
            {/* <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a> */}
            <a href="https://www.linkedin.com/in/siddhant-ingole-70b412260/">
              <LinkedInIcon fontSize="large" />
            </a>
            
          </div>
          <div className="center">
            <span>Siddhant</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>siddhant.in</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
