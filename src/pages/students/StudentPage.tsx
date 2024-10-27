import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { PopoverTrigger } from '@radix-ui/react-popover';

import { dataContext } from '@/context/Context';
import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';

const StudentPage = () => {
  const { studentData } = useContext(dataContext);
  const [data, setData] = useState<any>({
    studentName: '',
    studentClass: '',
    studentMarks: '',
  });
  console.log(data);
  console.log(studentData);

  return (
    <div className='md:mx-[20%] mx-[10%] mt-[3%]'>
      <Popover>
        <Card className='p-7'>
          <CardTitle>Your Student Log </CardTitle>
          <CardDescription>Enter all your student details</CardDescription>
          <CardContent className='flex flex-col gap-3 mt-2  border-b'>
            <PopoverTrigger className='border rounded-full w-20 h-9 hover:bg-slate-400 text-[0.8rem] flex justify-center items-center font-bold'>
              + Add
            </PopoverTrigger>
          </CardContent>
        </Card>
        <PopoverContent>
          <div className='mb-2'>
            <h1>Student log</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <Input
              placeholder='Add student name'
              type='text'
              onChange={(e) =>
                setData({
                  ...data,
                  studentName: e.target.value,
                })
              }
            />
            <Input
              placeholder='Enter a class'
              type='number'
              onChange={(e) =>
                setData({
                  ...data,
                  studentClass: e.target.value,
                })
              }
            />
            <Input
              placeholder='Enter marks'
              type='number'
              onChange={(e) =>
                setData({
                  ...data,
                  studentMarks: e.target.value,
                })
              }
            />
            <Button
              onClick={() => {
                studentData.push(data);
                setData({});
              }}
            >
              Submit
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {studentData.length != 0 ? (
        <div className='flex flex-col gap-2 mt-2'>
          {studentData?.map((item: any, index: any) => {
            return (
              <Card
                key={index}
                className='flex flex-col pl-3 p-1 rounded-[5px]'
              >
                <div className='flex justify-around items-center'>
                  <p className='text-[0.8rem]'>Name: {item.studentName}</p>
                  <p className='text-[0.8rem]'>Class: {item.studentClass}</p>
                  <p className='text-[0.8rem]'>Marks: {item.studentMarks}</p>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StudentPage;
