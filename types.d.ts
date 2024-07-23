type EmailType = {
    to : string;
    from: string;
    subject : string;
    body : string;
}

type UserTestType ={
    first : string;
    last : string;
    email : string;
    password : string;
    verified : boolean;
    service : Service;  
    Email_Limit : boolean; // Limit per User is 200 free email after that they are charged
}

interface Service {
    name_service: string;
    subscriber: string[];  // Adjusting to string array if it's supposed to be strings
  }

type Subscriber = {
    email : string
}