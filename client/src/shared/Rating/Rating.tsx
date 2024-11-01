
import { Rate } from 'antd';
export default function BasicRating({value}: {value: number}) {
    const roundedValue = Math.round(value * 2) / 2;
  return (
    <Rate disabled count={5} value={roundedValue} defaultValue={2} />
  );
}
