import { get, post } from './http'

export const teacherBind = p => post('/api/test/temp', p);
export const teacherGet = p => get('/api/test/tmp2', p);