const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-br').format(new Date(date));
};

export default formatDate;
