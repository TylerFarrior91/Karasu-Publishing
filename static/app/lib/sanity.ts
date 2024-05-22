import {createClient} from 'next-sanity'


export const client = createClient({
    projectId: '2ah50nc7',
    dataset:'production',
    apiVersion:'2022-03-25',
    useCdn:'true',
});

