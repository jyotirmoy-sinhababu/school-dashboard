import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Calendar,
  ChevronDown,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Users,
} from 'lucide-react';

import { addDays, format } from 'date-fns';
import { NewCalender } from '@/components/Calender';

const HomePage = () => {
  const events = [
    {
      id: 1,
      name: 'Parent-Teacher Meeting',
      date: addDays(new Date(), 1),
    },
    {
      id: 2,
      name: 'School Assembly',
      date: addDays(new Date(), 3),
    },
    {
      id: 3,
      name: 'Science Fair',
      date: addDays(new Date(), 7),
    },
    {
      id: 4,
      name: 'Sports Day',
      date: addDays(new Date(), 11),
    },
  ];
  return (
    <div>
      <main className='flex w-full flex-col overflow-hidden'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
            <div className='flex items-center space-x-2'>
              <Button>Download</Button>
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Students
                </CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>1,234</div>
                <p className='text-xs text-muted-foreground'>
                  +10% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Teachers
                </CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>56</div>
                <p className='text-xs text-muted-foreground'>
                  +2 new this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Active Classes
                </CardTitle>
                <LayoutDashboard className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>32</div>
                <p className='text-xs text-muted-foreground'>
                  +3 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Attendance Rate
                </CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>95%</div>
                <p className='text-xs text-muted-foreground'>
                  +2% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-4'>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-8'>
                  <div className='flex items-center'>
                    <Avatar className='h-9 w-9'>
                      <AvatarImage src='/placeholder-avatar.jpg' alt='Avatar' />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className='ml-4 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Olivia Martin
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Submitted assignment for Math class
                      </p>
                    </div>
                    <div className='ml-auto font-medium'>Just now</div>
                  </div>
                  <div className='flex items-center'>
                    <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
                      <AvatarImage src='/placeholder-avatar.jpg' alt='Avatar' />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className='ml-4 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Jackson Lee
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Marked attendance for Science class
                      </p>
                    </div>
                    <div className='ml-auto font-medium'>5m ago</div>
                  </div>
                  <div className='flex items-center'>
                    <Avatar className='h-9 w-9'>
                      <AvatarImage src='/placeholder-avatar.jpg' alt='Avatar' />
                      <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div className='ml-4 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Isabella Nguyen
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Created a new event: Parent-Teacher Meeting
                      </p>
                    </div>
                    <div className='ml-auto font-medium'>20m ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className='col-span-3'>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  You have {events.length} events scheduled for this month.
                </CardDescription>
                <CardContent>
                  <NewCalender />
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
