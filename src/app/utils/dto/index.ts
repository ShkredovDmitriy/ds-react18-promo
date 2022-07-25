const dtoDate = (date: string): string => {
  const someDate = new Date();
  const year = someDate.getFullYear();
  let month: any = someDate.getMonth();
  if(month < 10) month = '0' + month;
  let day: any = someDate.getDate();
  if(day < 10) day = '0' + day;
  return '' + day + '.' + month + '.' + year
}

const dtoWinners = (docs: any) => {
  const array: any = []
  docs.forEach((doc: any) => {
    const d = doc.data()
    array.push({
      period: d.period,
      user: d.user,
      phone: d.phone,
      email: d.email,
      prize: d.prize
    })
  })
  return array;
}

const dtoSelectOption = (docs: any) => {
  const array: any = []
  docs.forEach((doc: any) => {
    const d = doc.data()
    array.push({
      title: d.title,
      value: d.value,
    })
  })
  return array;
}

const dtoFaq = (docs: any) => {
  const array: any = []
  docs.forEach((doc: any) => {
    const d = doc.data()
    array.push({
      question: d.question,
      answer: d.answer,
    })
  })
  return array;
}

const dtoChecks = (docs: any) => {
  const array: any = []
  docs.forEach((doc: any) => {
    const d = doc.data()
    array.push({
      date: d.date,
      time: d.time,
      code: d.code,
      price: d.price,
      status: d.status,
    })
  })
  return array;
}

const dtoWinnerPhone = (str: string) => {
  let phone = str.split('');
  if(phone[11]) phone[11] = "*";
  if(phone[12]) phone[12] = "*";
  if(phone[14]) phone[14] = "*";
  return phone.join('');
}

export { dtoDate, dtoWinners, dtoFaq, dtoChecks, dtoWinnerPhone, dtoSelectOption }