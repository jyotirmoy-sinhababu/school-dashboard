import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function NewCalender() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='border p-3 rounded-[5px]'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
