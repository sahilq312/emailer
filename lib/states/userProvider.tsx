"use client";

import React, { useEffect, useState, ReactNode } from "react";
import UserContext from "./userContext";

/* interface Service {
  name_service: string;
  subscriber: Subscriber[];
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
 */
const User = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserTestType | null>(null);

  useEffect(() => {
    const user: UserTestType = {
      first: "Sahil",
      last: "Quraishi",
      email: "quraishisahil04@outlook.com",
      password: "12345",
      verified: true,
      service: {
        emails: [
          { body: "hlw subscribers" },
          { body: "hlw subscribers" },
          { body: "hlw subscribers" },
          { body: "hlw subscribers" },
        ],
        name_service: "newsletter1",
        subscriber: [{ email: "user1@user.com" }],
      },
      Email_Limit: true,
    };

    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default User;
