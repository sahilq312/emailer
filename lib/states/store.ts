import { atom } from "jotai"

const SampleData : UserTestType =  {
        first : "Sahil",
        last : "Quraishi",
        email : "quraishisahil04@outlook.com",
        password : "12345",
        verified : true,
        service : {
            name_service : "Sahil's Newsletter",
            subscriber : [],
        },
        Email_Limit : false
}

export const YourData = atom<UserTestType>(SampleData)