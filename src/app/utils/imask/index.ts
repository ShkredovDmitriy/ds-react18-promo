import { IMaskInput } from 'react-imask';
import IMask from 'imask';

const maskPhone: any = {
  mask: '+{1}(000)000-00-00'
};

const maskPrice: any = {
  mask: Number,
  scale: 2,
  signed: false,
  thousandsSeparator: '',
  padFractionalZeros: true,
  normalizeZeros: true,
  radix: '.',
  mapToRadix: ['.'],
  min: 1.00,
  max: 9000000.00,
}

const maskDate: any = {
  mask: 'DD.MM.YYYY',
  pattern: 'DD:MM:YYYY',
  autofix: true,
  blocks: {
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    YYYY: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2999,
      maxLength: 4
    }
  },
  // min: new Date(1990, 0, 1),
  // max: new Date(2023, 0, 1),
  // lazy: false
}

const maskTime: any = {
  mask: 'h:m',
  pattern: 'h:m',
  autofix: true,
  blocks: {
    h: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 23
    },
    m: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 59
    }
  }
}


const maskSelector = (mask: string | undefined) => {
  let imaskConfig = {};
  if(mask === "phone") imaskConfig = maskPhone;
  if(mask === "price") imaskConfig = maskPrice;
  if(mask === "date") imaskConfig = maskDate;
  if(mask === "time") imaskConfig = maskTime;
  return imaskConfig
}



// const maskCode4Digits = (id: string) => {
//   const element: HTMLElement = document.querySelector(id);
//   var maskOptions = { mask: '0000' };
//   const mask = IMask(element, maskOptions);
// };

// const maskDate = (id: string) => {
//   var element: HTMLElement = document.querySelector(id);
//   var maskOptions = {
//     mask: Date,
//     overwrite: true,
//     autofix: true,
//     blocks: {
//       d: {
//         mask: IMask.MaskedRange,
//         from: 1,
//         to: 31,
//         maxLength: 2,
//       },
//       m: {
//         mask: IMask.MaskedRange,
//         from: 1,
//         to: 12,
//         maxLength: 2,
//       },
//       Y: {
//         mask: IMask.MaskedRange,
//         from: 1930,
//         to: 2029,
//         maxLength: 4,
//       },
//     },
//   };
//   const mask = IMask(element, maskOptions);
// };

// const maskTime = (id: string) => {
//   var element: HTMLElement = document.querySelector(id);
//   var maskOptions = {
//     overwrite: true,
//     autofix: true,
//     mask: 'HH:MM',
//     blocks: {
//       HH: {
//         mask: IMask.MaskedRange,
//         placeholderChar: 'HH',
//         from: 0,
//         to: 23,
//         maxLength: 2,
//       },
//       MM: {
//         mask: IMask.MaskedRange,
//         placeholderChar: 'MM',
//         from: 0,
//         to: 59,
//         maxLength: 2,
//       },
//     },
//   };
//   var mask = IMask(element, maskOptions);
// };

// const maskPrice = (id: string) => {
//   var element: HTMLElement = document.querySelector(id);
//   var maskOptions = {
//     mask: Number,
//     min: 1,
//     max: 1000000,
//     scale: 2,
//     normalizeZeros: true,
//     padFractionalZeros: true,
//     overwrite: true,
//     // autofix: true
//   };
//   var mask = IMask(element, maskOptions);
// };

// const maskNumbers = (id) => {
//   var element = document.querySelector(id);
//   var maskOptions = {
//     mask: Number,
//     // min: 1,
//     // max: 9999999999,
//     // scale: 0,
//     // normalizeZeros: true,
//     // padFractionalZeros: true,
//     overwrite: true,
//     // autofix: true
//   };
//   var mask = IMask(element, maskOptions);
// };

// const maskSmsCode = (id) => {
//   var element = document.querySelector(id);
//   var maskOptions = { mask: '000000' };
//   var mask = IMask(element, maskOptions);
// };

export { IMaskInput, maskSelector };