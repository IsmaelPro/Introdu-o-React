import {ApiService} from './ApiService';

const endpoint = 'courses';

export const CategoryService = {
    list(){
        return ApiService.get(endpoint);
    } 
}