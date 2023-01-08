
import {instance} from "@/api/api";

export const CategoryService = {
    async hits() {
        return instance.get('/api/categories/hits')
    },

    async byId(id) {
        return instance.get(`/api/categories/${id}`)
    },

    async all() {
        return instance.get('/api/categories')
    }
}