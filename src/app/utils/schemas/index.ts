import * as Yup from 'yup';
import { messages } from 'app/messages';
import * as R from 'ramda';

const getTotalFileSize = R.reduce((acc, item: any) => acc + (item.size / 1024), 0);

// Yup.addMethod(
//   Yup.array,
//   'fileSize',
//   (size: any) => {
//     return Yup.array().test({
//       message: () => {
//         return "Add from 1 to 4 files"
//       },
//       test: (value: any) => {
//         return value.length > 0
//       },
//     })
//   },
// );

// Yup.addMethod(
//   Yup.mixed,
//   'ext',
//   (extensions: any) => {
//     return Yup.mixed().test({
//       message: (params: any) => {
//         return "Use only jpeg and png files"
//       },
//       test: (value: any) => {
//         return R.includes(value.type, extensions);
//       },
//     })
//   },
// );

const email = Yup.string()
    .email(messages.emailInvalid)
    .max(50, messages.toLong50)
    .required(messages.email.required);

const phone = Yup.string()
    .required(messages.required);

const password = Yup.string()
    .min(8, messages.passwToShort)
    .max(50, messages.toLong50)
    .required(messages.requiredPassword);

const name = Yup.string()
    .matches(/^[a-zA-Z]+$/, messages.useRussLetters)
    .min(2, messages.toShort2)
    .max(50, messages.toLong50)
    .required(messages.requiredFirstName);

const lastname = Yup.string()
    .matches(/^[a-zA-Z]+$/, messages.useRussLetters)
    .min(2, messages.toShort2)
    .max(50, messages.toLong50)
    .required(messages.requiredLastName);

const fn = Yup.string()
    .matches(/^[0-9]+$/, messages.enter16digits)
    .min(16, messages.enter16digits)
    .max(16, messages.enter16digits)
    .required(messages.required);

const date = Yup.string()
    .matches(/^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19[3456789][0-9]|20[012][0-9])$/, messages.date.format)
    .required(messages.required);

const time = Yup.string()
    .matches(/^(0[1-9]|[1][0-9]|2[0123])[:]([012345][1-9])$/, messages.time.format)
    .required(messages.required);

const price = Yup.string()
    .required(messages.required);

const select = Yup.string()
    .required(messages.required);

const message = Yup.string()
    .min(10, messages.message.min)
    .required(messages.required);

const file: any = Yup.array()
    .test({
      message: (params) => {
        return messages.file.more10mb
      },
      test: (value: any) => {
        return getTotalFileSize(value) < 11000;
      },
    })
    .test({
      message: (params) => {
        return "Add from 1 to 4 files"
      },
      test: (value: any) => {
        return value.length > 0
      },
    })
    .test({
      message: (params) => {
        return "Use only jpeg and png files"
      },
      test: (values: any) => {
        const arr = ['image/jpeg', 'image/jpg', 'image/png'];
        return values.reduce((acc: number, ext: any) => {
          return arr.includes(ext.type) ? 0 : 1;
        }, 0) === 0;
      },
    })
    .required();

const any = Yup.string();

const shape = (obj: any) => Yup.object().shape({...obj})

// SCHEMAS
const schemas = {
  regis: shape({ name, lastname, email, phone, password }),
  login: shape({ email, password }),
  upload: shape({ file }),
  manual: shape({ fn, date, time, price }),
  feedbackGuest: shape({ name, lastname, email, message }),
  feedback: shape({ theme: select, message }),
  recov: shape({ email }),
  winners: shape({ phone: any })
}

// VALUES
const values = {
  regis: {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  },
  login: {
    email: "",
    password: ""
  },
  recov: {
    email: "",
  },
  upload: {
    file: [],
  },
  manual: {
    fn: "",
    date: "",
    time: "",
    price: ""
  },
  feedbackGuest: {
    name: "",
    lastname: "",
    email: "",
    message: ""
  },
  feedback: {
    theme: "",
    message: ""
  }
}

export { schemas, values };

// export const formFeedbackGuestSchema = Yup.object().shape({
//   email: Yup.string()
//     .email(messages.emailInvalid)
//     .max(50, messages.toLong50)
//     .required(messages.requiredEmail),
//   theme: Yup.string()
//     .required(messages.requiredTheme),
//   message: Yup.string()
//     .required(messages.requiredMessage),
// });

// export const formFeedbackSchema = Yup.object().shape({
//   theme: Yup.string()
//     .required(messages.required),
//   message: Yup.string()
//     .required(messages.required),
// });

// export const formWinnersSchema = Yup.object().shape({
//   week: Yup.string()
//     .required(messages.required),
//   phone: Yup.string()
//     .required(messages.required),
// });

// export const formChangeProfileSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .matches(/^[а-яА-Я]+$/, messages.useRussLetters)
//     .min(2, messages.toShort2)
//     .max(50, messages.toLong50)
//     .required(messages.requiredFirstName),
//   lastName: Yup.string()
//     .matches(/^[а-яА-Я]+$/, messages.useRussLetters)
//     .min(2, messages.toShort2)
//     .max(50, messages.toLong50)
//     .required(messages.requiredLastName),
// });


// const regex = {
//   name: (value: string) => {
//     console.log("REGEX")
//     console.log(value)
//     return /^[а-яА-Я ]{2,20}$/i.test(value)
//   },
//   nameLast: value => /^[а-яА-Я ]{2,20}$/i.test(value),
//   nameMiddle: value => /^[а-яА-Я ]{2,20}$/i.test(value),
//   age: value => {
//     if (value < 18) return false;
//     else if (value > 120) return false;
//     else return /^[0-9]{2,3}$/i.test(value);
//   },
//   password: value => /^[A-Za-z0-9]{6,16}$/i.test(value),
//   email: value => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/i.test(value),
//   phone: value =>
//     /^([\+])+([7])+([\(])+([9])+([0-9]{2})+([\)])+([0-9]{7})$/i.test(value),
//   message: value => /^[А-Яа-яA-Za-z0-9 ]{5,1000}$/i.test(value),
//   price: value => /^[0-9]+(\,[0-9][0-9])$/i.test(value),
//   linkSocial: value =>
//     /^(http|https):\/\/(www.vk.com|www.instagram.com|vk.com|instagram.com)[^ "]+$/.test(
//       value
//     ),
//   date: value =>
//     /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19[3456789][0-9]|20[012][0-9])$/i.test(
//       value
//     ),
//   time: value => /^(0[1-9]|[1][0-9]|2[01234])[:]([012345][1-9])$/i.test(value),
//   promoCode: value => /^[a-zA-Z0-9]{10}$/i.test(value)
// };
