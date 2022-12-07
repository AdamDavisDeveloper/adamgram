import DummyData from "./DummyData";
const numberOfRows: number = dataArray().length;

function dataArray() {
    let rows = [];
    for (let i = 0; i < DummyData.length; i += 3) {
      rows.push([DummyData[i], imageExists(DummyData[i + 1]), imageExists(DummyData[i + 2]) ]);
    }
    return rows;
}

function imageExists(image: any | undefined) {
    if(image == undefined) return false;
    else return image;
}

export default function() {
    let rowsArray= [];

    for (let i = 0; i < numberOfRows; i++) {
      const imageOne    = dataArray()[i][0].imgName; 
      const imageTwo    = dataArray()[i][1].imgName;
      const imageThree  = dataArray()[i][2].imgName;

      rowsArray.push( 
        <div className="row" key={i}>
          <div className="content">
            <img src={imageOne} loading="lazy" />
          </div>
          <div className="content">
            {imageTwo && <img src={imageTwo} loading="lazy" />}
          </div>
          <div className="content">
            {imageThree && <img src={imageThree} loading="lazy" />}
          </div>
        </div> 
      );
    }
    return rowsArray;
  }