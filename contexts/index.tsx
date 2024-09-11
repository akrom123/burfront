"use client";
import React, { createContext, ReactNode, useContext } from "react";
import appStore from "@/store";

export const StoreContext = createContext({ appStore });

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <StoreContext.Provider value={{ appStore }}>{children}</StoreContext.Provider>
    );
};

export const useStores = () => {
    return useContext(StoreContext);
};