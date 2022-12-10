import AppBar from "./widgets/AppBar";
import './Global.scss';
import './Login.scss';

export default () => {
    return (
        <div id="Login">
            <AppBar />
            
            <div id="Form">
                <h1>Adamgram Admin</h1>

                <div className="inputs">
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                </div>
                    <button>Welcome back</button>
            </div>
        </div>
    )
}