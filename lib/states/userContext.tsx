import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext<{ user: UserTestType | null }>({ user: null });

export default UserContext;
