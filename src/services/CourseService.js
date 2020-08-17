import {ApiService} from './ApiService';
import Course from '../components/Course';

const endpoint = 'courses';

export const CourseService = {
    list(){
        return ApiService.get(endpoint);
    },

    create (newCourse){
        return ApiService.post(endpoint, newCourse);
    },

    remove(CourseId){
        return ApiService.delete(endpoint, CourseId)
    }   
}