import {instance} from "@/api/api";

export const VariantService = {
    async all() {
        return instance.get('/api/variants')
    }
}