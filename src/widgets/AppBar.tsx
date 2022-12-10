import Logo from '../assets/logo.svg';

export default () => {
    return (
      <div className="logo-wrapper">
        <img src={Logo} alt="Adamgram logo" onClick={() => {
          window.location.reload();
        }}/>
      </div>
    )
}