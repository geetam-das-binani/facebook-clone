import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();
const StateProvider = ({ initialState, reducer, children }) => {
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};

const useStateValue = () => useContext(StateContext);

export { StateProvider, useStateValue };
