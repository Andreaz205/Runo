import React, {FC, PropsWithChildren} from 'react';
import Layout from "../components/layout/Layout";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

const MainProvider :FC <PropsWithChildren>= ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                {children}
            </Layout>
        </QueryClientProvider>
    );
};

export default MainProvider;