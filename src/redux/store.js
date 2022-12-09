// 외부에서 가져옴
import { createStore } from "redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);

export default store;
