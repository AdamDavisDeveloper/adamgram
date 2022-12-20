import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default () => {
    const navigate = useNavigate()
    return (
      <div className="logo-wrapper">
        <img src={Logo} alt="Adamgram logo" onClick={() => navigate("/")}/>
      </div>
    )
}