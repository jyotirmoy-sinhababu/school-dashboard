import { useContext, useState } from 'react';
import { createContext } from 'react';

export const dataContext = createContext<any>(null);

const Context = ({ children }: any) => {
  const [studentData, setStudentData] = useState<any>([]);
  const [teacherData, setTeacherData] = useState<any>([]);

  return (
    <dataContext.Provider
      value={{ studentData, teacherData, setStudentData, setTeacherData }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default Context;
