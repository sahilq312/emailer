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
    Email_Limit : boolean; 
    
}

interface Service {
    name_service: string;
    subscriber: Subscriber[];  
    emails : Email[]
  }

type Subscriber = {
    email : string
}

type Email = {
    //to : string[];
    body : string;
}