import moment from 'moment';

const shortFormatDate = date => {
  return moment(date).format('DD MMM');
};

const getYear = date => {
  return moment(date).format('YYYY');
};

const convertDateFormat = (date, string) => {
  return moment(date).format(string);
};

const getTotalDays = (day1, day2, absolute) => {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(moment(day1).format('YYYY-MM-DD'));
  var secondDate = new Date(moment(day2).format('YYYY-MM-DD'));

  var diffDays = Math.round(
    absolute === false
      ? (firstDate.getTime() - secondDate.getTime()) / oneDay
      : Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
  return diffDays + 1;
};

const getHourAndMinute = date => {
  return addZero(moment(date).hours()) + ':' + addZero(moment(date).minutes());
};

const addZero = i => {
  if (i < 10) {
    i = i.length === 2 ? i : '0' + i;
  }
  return i;
};

const timeDuration = currentValue => {
  let timeDecimal = currentValue / 3600;
  let hour = Math.floor(timeDecimal);
  let leaveMinute = currentValue % 3600;
  let minute = addZero(Math.ceil(leaveMinute / 60));
  let display = '';
  // eslint-disable-next-line
  if (hour == '00' && minute == '00') {
    display = '0 min';
    // eslint-disable-next-line
  } else if (hour == '00' && minute != '00') {
    display = minute + ' mins';
    // eslint-disable-next-line
  } else if (hour != '00' && minute == '00') {
    display = hour + ' h';
  } else {
    display = hour + ':' + minute + ' h';
  }
  return display;
};

const addTime = (date, duration, convertToMilliSecond) => {
  let newDate = new Date(date);
  newDate = new Date(newDate.getTime() + duration * convertToMilliSecond);
  newDate = moment(newDate).format('YYYY-MM-DDTHH:mm:ss');
  return newDate;
};
const rangeDate = (startDate, endDate) => {
  return startDate === '' || endDate === ''
    ? '-'
    : convertDateFormat(startDate, 'DD MM YYYY') ===
      convertDateFormat(endDate, 'DD MM YYYY')
    ? convertDateFormat(startDate, 'DD MMM YYYY')
    : convertDateFormat(startDate, 'MM') === convertDateFormat(endDate, 'MM')
    ? convertDateFormat(startDate, 'DD') +
      ' - ' +
      convertDateFormat(endDate, 'DD MMM YYYY')
    : convertDateFormat(startDate, 'YYYY') ===
      convertDateFormat(endDate, 'YYYY')
    ? convertDateFormat(startDate, 'DD MMM') +
      ' - ' +
      convertDateFormat(endDate, 'DD MMM YYYY')
    : convertDateFormat(startDate, 'DD MMM YYYY') +
      ' - ' +
      convertDateFormat(endDate, 'DD MMM YYYY');
};
// const addMonth = (currentDate, month) => {
//   let futureMonth = moment(currentDate).add(month, 'M');
//   return new Date(futureMonth);
// };

// date => tanggalnya
// numAdd => jumlah bilangan yang akan di tambah (integer)
// stringTime => seperti "M", "d", "w" dkk (dokumentasi moment)
// fungsinya untuk menambahkan tanggal
const addDate = (date, numAdd, stringTime) => {
  let futureMonth = moment(date).add(numAdd, stringTime);
  return new Date(futureMonth);
};

const subtractDate = (date, numSubtract, stringTime) => {
  let newDate = moment(date).subtract(numSubtract, stringTime);
  return new Date(newDate);
};
// const setFirstDay = currentDate => {
//   return new Date(moment(currentDate).set('date', 1));
// };
// date => tanggal
// stringTime => seperti "year" / "month" / "week"
const endOf = (date, stringTime) => {
  return new Date(moment(date).endOf(stringTime));
};
// date => tanggal
// stringTime => seperti "year" / "month" / "week"
const startOf = (date, stringTime) => {
  return moment(date).startOf(stringTime);
};

const getTime = date => {
  let dateConvert = moment(date).format('L');
  return new Date(dateConvert).getTime();
};

const diffDate = (startDate, endDate, unitTIme) => {
  return moment(endDate).diff(moment(startDate), unitTIme);
};

const changeSecondToHourAndMinutes = duration => {
  let hour = Math.floor(duration / 3600);
  let minute = (duration % 3600) / 60;
  // minute = minute % 10 === 0 ? `0${minute}` : minute;
  minute =
    minute !== 0
      ? minute < 10
        ? `0${minute}`
        : minute
      : hour !== 0
      ? '00'
      : '0';
  return hour === 0 ? `${minute} mins` : `${hour}:${minute} h`;
};

const changeTime = (date, hours, minutes) => {
  let newDate = new Date(date);
  newDate.setHours(hours);
  newDate.setMinutes(minutes);
  newDate = convertDateFormat(newDate, 'YYYY-MM-DDTHH:mm:ss');
  return newDate;
};
export {
  shortFormatDate,
  getYear,
  convertDateFormat,
  getTotalDays,
  getHourAndMinute,
  addZero,
  timeDuration,
  addTime,
  rangeDate,
  // addMonth,
  // setFirstDay,
  endOf,
  startOf,
  addDate,
  getTime,
  subtractDate,
  diffDate,
  changeSecondToHourAndMinutes,
  changeTime,
};
