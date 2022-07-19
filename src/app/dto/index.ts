const dtoDate = (date: string): string => {
  const someDate = new Date(date);
  const year = someDate.getFullYear();
  let month: any = someDate.getMonth();
  if(month < 10) month = '0' + month;
  let day: any = someDate.getDate();
  if(day < 10) day = '0' + day;
  return '' + day + '.' + month + '.' + year
}

export { dtoDate }