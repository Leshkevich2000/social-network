import React from "react";
import store from "./redux/state";
const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;
