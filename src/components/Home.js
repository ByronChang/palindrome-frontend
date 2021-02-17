import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { reverse } from "lodash";

const Home = (props) => {
  const MsgData = useSelector(({ message }) => message.message || []);

  const MsgDataSorted = reverse(MsgData.map((item, index) => ({...item, id:index})));

  return (
    <Fragment>
      {!isEmpty(MsgData) && (
      <div className="container">        
        <div className="card card-container">
          <h2>Results:</h2>
          <div className="listItems" id="listItems" name="listItems" alt="listItems">
          {
          MsgDataSorted.map((item, index)=>(
            <div 
              id={index} 
              key={index} 
              className={item.palindrome === false 
                ? 'alert alert-danger d-flex justify-content-between' 
                : 'alert alert-success d-flex justify-content-between'} 
              role="alert">
              <strong>{item.text}</strong>
              {item.palindrome === false 
                ? <h5>✘</h5>
                : <h5>✔</h5>}
            </div>            
          ))}
          </div>
        </div>  
      </div>
      )}
    </Fragment>
  );
};

export default Home;
