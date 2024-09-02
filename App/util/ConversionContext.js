import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { api } from "./api";
//context creation
export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "GBP";

//context provider
export const ConversionContextProvider = ({ children }) => {
  //children prop will make sure that the children of the component have access to the context
  const [baseCurrency, _setBaseCurrency] = useState("USD"); //overiding the setBaseCurrency function
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    setIsLoading(true);
    return api(`/latest?base=${currency}`)
      .then((response) => {
        // console.log(response);
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Sorry, something went wrong", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    _setBaseCurrency(currency);
  };

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
    date,
    rates,
    isLoading,
  };

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);
  }, []);

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
