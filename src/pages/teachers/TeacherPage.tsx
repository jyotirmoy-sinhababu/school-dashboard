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

const TeacherPage = () => {
  const { teacherData } = useContext(dataContext);
  const [data, setData] = useState<any>({
    teacherName: '',
    teacherClass: '',
    teacherMarks: '',
  });
  return (
    <div className='md:mx-[20%] mx-[10%] mt-[3%]'>
      <Popover>
        <Card className='p-7'>
          <CardTitle>Your Teacher Log </CardTitle>
          <CardDescription>Enter all your teacher details</CardDescription>
          <CardContent className='flex flex-col gap-3 justify-end border-b'>
            <PopoverTrigger className='border rounded-full w-20 h-9 hover:bg-slate-400 text-[0.8rem] flex justify-center items-center font-bold mt-2'>
              + Add
            </PopoverTrigger>
          </CardContent>
        </Card>
        <PopoverContent>
          <div className='mb-2'>
            <h1>Teacher's log</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <Input
              placeholder='Add teacher name'
              type='text'
              onChange={(e) =>
                setData({
                  ...data,
                  teacherName: e.target.value,
                })
              }
            />
            <Input
              placeholder='Assign class'
              type='number'
              onChange={(e) =>
                setData({
                  ...data,
                  teacherClass: e.target.value,
                })
              }
            />
            <Input
              placeholder='Assign period'
              type='number'
              onChange={(e) =>
                setData({
                  ...data,
                  teacherMarks: e.target.value,
                })
              }
            />
            <Button
              onClick={() => {
                teacherData.push(data);
                setData({});
              }}
            >
              Submit
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {teacherData.length > 0 ? (
        <div className='flex flex-col gap-2 mt-2'>
          {teacherData?.map((item: any, index: any): any => {
            return (
              <Card key={index} className='flex justify-around rounded-[5px]'>
                <p className='text-[0.8rem]'>Name: {item.teacherName}</p>
                <p className='text-[0.8rem]'>
                  Class Assigned: {item.teacherClass}
                </p>
                <p className='text-[0.8rem]'>
                  Period Assigned: {item.teacherMarks}
                </p>
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

export default TeacherPage;
