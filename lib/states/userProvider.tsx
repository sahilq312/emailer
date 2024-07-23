"use client"

import React, { useEffect, useState, ReactNode } from "react";
import UserContext from "./userContext";

interface Service {
  name_service: string;
  subscriber: string[];
}

interface User {
  first: string;
  last: string;
  email: string;
  password: string;
  verified: boolean;
  service: Service;
  Email_Limit: boolean;
}

const User = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user: User = {
      first: "Sahil",
      last: "Quraishi",
      email: "quraishisahil04@outlook.com",
      password: "12345",
      verified: true,
      service: {
        name_service: "Sahil's Newsletter",
        subscriber: [],
      },
      Email_Limit: false,
    };

    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
};

export default User;
