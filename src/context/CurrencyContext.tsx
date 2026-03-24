"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Currency = "INR" | "USD" | "EUR" | "GBP";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInUSD: number) => string;
  exchangeRate: number;
}

const rates: Record<Currency, number> = {
  USD: 1,
  INR: 83.50, // Mock rates
  EUR: 0.92,
  GBP: 0.79
};

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  INR: "₹",
  EUR: "€",
  GBP: "£"
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>("INR");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("royal_currency") as Currency;
    if (savedCurrency && rates[savedCurrency]) {
      setCurrencyState(savedCurrency);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("royal_currency", c);
  };

  const formatPrice = (priceInUSD: number) => {
    const converted = priceInUSD * rates[currency];
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0
    }).format(converted);
  };

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      formatPrice,
      exchangeRate: rates[currency]
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
