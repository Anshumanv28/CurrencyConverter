import React, { createContext, useState } from "react";
//context creation
export const ConversionContext = createContext();

//context provider
export const ConversionContextProvider = ({ children }) => {
  //children prop will make sure that the children of the component have access to the context
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
  };

  return (
    // <MyContext.Provider value={sharedData}>
    //   <ComponentTree />
    // </MyContext.Provider>

    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
  //now we consume the context in the components that will need it
};
