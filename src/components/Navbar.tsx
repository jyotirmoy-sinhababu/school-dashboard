import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Input } from './ui/input';
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

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-[2%]'>
      <div className='container flex h-14 items-center'>
        <div className='mr-4 hidden md:flex'>
          <a className='mr-6 flex items-center space-x-2' href='#'>
            <LayoutDashboard className='h-6 w-6' />
            <span className='hidden font-bold sm:inline-block'>
              School Dashboard
            </span>
          </a>
          <nav className='flex items-center space-x-6 text-sm font-medium'>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground'
              href='#'
            >
              Home
            </a>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground/60'
              href='#'
            >
              Students
            </a>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground/60'
              href='#'
            >
              Teachers
            </a>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground/60'
              href='#'
            >
              Classes
            </a>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='pr-0'>
            <nav className='grid gap-2 py-6'>
              <a
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                <Home className='mr-2 h-4 w-4' />
                Home
              </a>
              <a
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                <Users className='mr-2 h-4 w-4' />
                Students
              </a>
              <a
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                <Users className='mr-2 h-4 w-4' />
                Teachers
              </a>
              <a
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                <LayoutDashboard className='mr-2 h-4 w-4' />
                Classes
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <form>
              <div className='relative'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search...'
                  className='w-full bg-background pl-8 md:w-[200px] lg:w-[300px]'
                />
              </div>
            </form>
          </div>
          <Button variant='ghost' size='icon'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <MessageSquare className='h-4 w-4' />
            <span className='sr-only'>Toggle messages</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <Avatar className='h-8 w-8'>
              <AvatarImage alt='User avatar' src='/placeholder-avatar.jpg' />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
