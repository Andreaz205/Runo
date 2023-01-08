import React from 'react';
import {GetStaticProps, NextPage} from "next";
import Catalog from "../../app/components/ui/Catalog/Catalog";
import {useRouter} from "next/router";
import {VariantService} from "@/services/VariantService";

const CatalogPage : NextPage= ({data}) => {

    return (
        <Catalog variants={data} />
    );
};

export default CatalogPage;

export const getStaticProps:GetStaticProps = async () => {
    try {
        const {data} = await VariantService.all()
        return {
            props: {
                data
            }
        }
    } catch (e) {
        return {
            notFound: true
        }
    }

}