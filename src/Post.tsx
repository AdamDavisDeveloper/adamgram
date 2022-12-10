import AppBar from "./widgets/AppBar";
import './Global.scss';
import './Post.scss';

export default (props: {
    ProfilePhoto: string,
    currentPostData: any,
    setCurrentPostData: React.Dispatch<React.SetStateAction<any>>
}) => {

    function viewCommentsText() {
        let commentsNumber = 1;
        if(commentsNumber > 1) {
            return `View all ${commentsNumber} comments`;
        } else return "View comment";
    }

    return (
        <div id="Post">
            <AppBar />
            <div id="PostContainer">
                <div className="content">
                    <header>
                        <img className="post-profile-photo" src={props.ProfilePhoto} alt="profile" />
                        <div className="info" onClick={() => { window.location.reload() }}>
                            <span className="username"><b>adam.png</b></span>
                            <span>{props.currentPostData.location || ""}</span>
                        </div>
                    </header>

                    <img src={props.currentPostData.imgName} alt="alt text" />

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
                        <span><b>adam.png</b> {props.currentPostData.description}</span>
                        <span className="view-comments">{viewCommentsText()}</span>
                        <span className="date">December 18</span>
                    </div>
                </div>

                
            </div>
        </div>
    )
}