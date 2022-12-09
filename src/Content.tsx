
export default (props: {
  contentData: any,
  setView: React.Dispatch<React.SetStateAction<string>>,
  setCurrentPostData: React.Dispatch<React.SetStateAction<any>>
}) => {
    const { contentData, setView, setCurrentPostData } = props;
    const numberOfRows: number = dataArray().length;

    if(!contentData) return <></>;
    
    function dataArray() {
        let rows = [];
        for (let i = 0; i < contentData.length; i += 3) {
          rows.push([contentData[i], imageExists(contentData[i + 1]), imageExists(contentData[i + 2]) ]);
        }
        return rows;
    }
    
    function imageExists(image: any | undefined) {
        if(image == undefined) return false;
        else return image;
    }
    let rowsArray= [];

    for (let i = 0; i < numberOfRows; i++) {
      const imageOne    = dataArray()[i][0]; 
      const imageTwo    = dataArray()[i][1];
      const imageThree  = dataArray()[i][2];

      rowsArray.push( 
        <div className="row" key={i}>
          <div className="content">
            <img src={imageOne.imgName} loading="lazy" onClick={() => {
              setCurrentPostData(imageOne);
              setView("Post");
            }} />
          </div>
          <div className="content">
            {imageTwo && <img src={imageTwo.imgName} loading="lazy" onClick={() => {
              setCurrentPostData(imageTwo);
              setView("Post");
            }} />}
          </div>
          <div className="content">
            {imageThree && <img src={imageThree.imgName} loading="lazy" onClick={() => {
              setCurrentPostData(imageThree);
              setView("Post");
            }} />}
          </div>
        </div> 
      );
    }
    return rowsArray;
  }