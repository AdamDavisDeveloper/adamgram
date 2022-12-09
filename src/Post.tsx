import AppBar from "./widgets/AppBar";
import './Post.scss';

export default (props: {
    ProfilePhoto: string,
    currentPostData: any,
    setCurrentPostData: React.Dispatch<React.SetStateAction<any>>
}) => {
    return (
        <div id="Post">
            <AppBar />
            <div id="PostContainer">
                <div className="content">
                    <header>
                        <img className="post-profile-photo" src={props.ProfilePhoto} alt="profile" />
                        <div className="info">
                            <p><b>adam</b></p>
                            <p>{props.currentPostData.location || ""}</p>
                        </div>
                    </header>
                    <img src={props.currentPostData.imgName} alt="alt text" />
                </div>
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
            </div>
        </div>
    )
}