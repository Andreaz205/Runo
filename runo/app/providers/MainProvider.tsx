import React, {FC, PropsWithChildren} from 'react';
import Layout from "../components/layout/Layout";
import {QueryClient, QueryClientProvider} from "react-query";
import HeadProvider from "./HeadProvider/HeadProvider";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

const MainProvider :FC <PropsWithChildren>= ({children}) => {
    return (
        <HeadProvider>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    {children}
                </Layout>
            </QueryClientProvider>
        </HeadProvider>

    );
};

export default MainProvider;