import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import PalindromeService from "../services/palindrome/palindrome.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import * as Actions from "../actions/message";

const InputWord = (props) => {
  const form = useRef();
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onChangeWord = (e) => {
    const word = e.target.value;
    setWord(word);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    PalindromeService.getPalindromeContent(word).then(
      (response) => {        
        dispatch(Actions.setMessage(response.data));
        setLoading(false);
        setWord("");
      },
      (error) => {
        dispatch(Actions.setMessage(error.data))        
      }
    );
  };
  
  return (
    <div className="col-md-12">      
        <Form onSubmit={handleSend} ref={form} >
          <div className="input-group">
            <Input
              type="text"
              className="form-control w512"
              name="word"
              placeholder="Insert text"
              aria-label="Insert text"
              aria-describedby="button-setword"
              value={word}
              onChange={onChangeWord}              
            />
            <button id="button-setword" className="btn btn-primary ml-3 pl-4 pr-4" disabled={loading || word === ""}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Send</span>
            </button>
          </div>           
        </Form>
    </div>
  );
};

export default InputWord;
