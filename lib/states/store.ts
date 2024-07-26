import { atom } from "jotai";

const SampleData: UserTestType = {
  first: "Sahil",
  last: "Quraishi",
  email: "quraishisahil04@outlook.com",
  password: "12345",
  verified: true,
  Email_Limit: false,
  service: {
    emails: [
        {body : "first newsletter"},
        {body : "first newsletter"},
        {body : "first newsletter"},
        {body : "first newsletter"},
        {body : "first newsletter"},
        {body : "first newsletter"},
    ],
    name_service: "sahil newsLetter",
    subscriber: [
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
        {email :"user1@user.com"},
    ],
  },
};

export const YourData = atom<UserTestType>(SampleData);
