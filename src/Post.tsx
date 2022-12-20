import { Link, useNavigate, useParams } from 'react-router-dom';
import Profile from './profile-config.json';
import AppBar from "./widgets/AppBar";
import DummyData from './DummyData';
import './Global.scss';
import './Post.scss';

export default (props: {
    ProfilePhoto: string,
    currentPostData: any,
    setCurrentPostData: React.Dispatch<React.SetStateAction<any>>
}) => {
    const navigate = useNavigate();
    const { slug } = useParams();

    function viewCommentsText() {
        let commentsNumber = 5;
        if(commentsNumber > 1) {
            return `View all ${commentsNumber} comments`;
        } else return "View comment";
    }

    function postData() {
        return DummyData.find((photo) => photo.slug == slug);
    }

    return (
        <div id="Post">
            <AppBar />
            <div id="PostContainer">
                <div className="content">
                    <header onClick={() => navigate("/")}>
                        <img className="post-profile-photo" src={props.ProfilePhoto} alt="profile" />
                        <div className="info">
                            <span className="username"><b>{Profile.name}</b></span>
                            <span>{props.currentPostData.location || ""}</span>
                        </div>
                    </header>

                    <img src={postData()?.imgName} alt="alt text" />

                    <div className="buttons">
                        <div className="left">
                            <img src={""} alt="" />
                            <img src={""} alt="" />
                            <img src={""} alt="" />
                        </div>
                        <div className="right">
                            <img src={""} alt="" />
                        </div>
                    </div>

                    <div className="description">
                        <span>Liked by <b>24</b> others</span>
                        <span><b>{Profile.name}</b> {props.currentPostData.description}</span>
                        <span className="view-comments">{viewCommentsText()}</span>
                        <span className="date">December 18</span>
                    </div>
                </div>

                
            </div>
        </div>
    )
}