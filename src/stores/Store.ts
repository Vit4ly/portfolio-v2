import { defineStore } from 'pinia'

export const useDataStore = defineStore({
    id: 'DataStore',
    state: () => ({
        CONTACT_LIST: [
            {
                path: "tel:+79052066661",
                text: "+7(905)2066661",
                name: "mobile",
            },
            {
                path: "mailto:vit4ly.kiselev@gmail.com",
                text: "Vit4ly.kiselev@gmail.com",
                name: "mail",
            },
            {
                path: "skype:live:.cid.5ab92a5ce4ae2837",
                text: "Связаться в Skype",
                name: "skype",
            },
            {
                path: "https://t.me/Vit4liyKiselev",
                text: "Написать в Telegram",
                name: "telegram",
            },
            {
                path: "https://www.linkedin.com/in/vitaliy-kiselev/",
                text: "Написать в LinkedIn",
                name: "linkedin",
            },
            {
                path: "https://github.com/Vit4ly",
                text: "Здесь можно посмотреть на код",
                name: "github",
            },
        ],
    }),
})
