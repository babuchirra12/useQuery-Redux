import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Contact} from "../models/contact.model"
export const contactsApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
    endpoints:(builder) =>({
        contacts: builder.query<Contact[], void> ({
query:() => '/contacts'
        }),
        contact:builder.query<Contact, string>({
          query:(id) => `/contact/${id}` 
        })
    })
})

export const { useContactsQuery, useContactQuery } = contactsApi;