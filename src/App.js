import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Data from "./componets/Data";
import { GET_USER_PENDING } from "./redux-saga/user/action/action";



function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_PENDING});
  }, []);

  return (
    <div className="App">
      <Data/>
    </div>
  );
}

export default App;