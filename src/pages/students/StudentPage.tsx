import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

const StudentPage = () => {
  return (
    <div>
      <Card>
        <CardTitle>Total Students</CardTitle>
        <CardDescription>1,234</CardDescription>
        <Button>+ Add </Button>
      </Card>
    </div>
  );
};

export default StudentPage;
