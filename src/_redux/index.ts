import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import shipment from "./reducers/Shipment.reducer";

const store = createStore(
    combineReducers({ shipment }),
    compose(
        applyMiddleware(thunk),
        typeof window === "object" &&
            typeof (window as any).REDUX_DEVTOOLS_EXTENSION !== "undefined"
            ? (window as any).REDUX_DEVTOOLS_EXTENSION()
            : (func: any) => func
    )
);

export type RootState = ReturnType<typeof store.getState>;

export default store;