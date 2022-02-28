import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let [searchParams] = useSearchParams();
  const keywordParam = searchParams.get("keyword") ? true : false;
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else if (keywordParam) {
      navigate("/");
    } else {
      navigate(location);
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 mx-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
