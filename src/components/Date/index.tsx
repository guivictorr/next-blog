import formatDate from '../../utils/formatDate';

type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return <time dateTime={date}>{formatDate(date)}</time>;
};

export default Date;
