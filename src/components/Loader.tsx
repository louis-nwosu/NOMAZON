import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoader from 'react-loader-spinner'

const Loading = () => {
      return (
          <div className='d-flex justify-content-center'>

        <ReactLoader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          />
          </div>
      );
    
  }

export default Loading