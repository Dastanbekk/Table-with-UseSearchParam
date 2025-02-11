import { createContext, useState } from "react"

export const ValueContext = createContext()

const ValueContextProvider = ({children}) => {
  const [valueState, setValueState] = useState([])

  return (
    <ValueContext.Provider value={{valueState, setValueState}}>
        {children}
    </ValueContext.Provider>
  )
}

export default ValueContextProvider