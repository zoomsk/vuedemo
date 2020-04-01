import { get, post } from './http'

export const teacherBind = p => post('/xxt-auth/teacher/bind', p);
export const get2 = p => get('/xxt-auth/teacher/bind', p);