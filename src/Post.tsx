import AppBar from "./widgets/AppBar";

export default (props: {
    currentPostData: any,
    setCurrentPostData: React.Dispatch<React.SetStateAction<any>>
}) => {
    return (
        <>
            <AppBar />
            <img src={props.currentPostData.imgName} alt="" />
        </>
    )
}