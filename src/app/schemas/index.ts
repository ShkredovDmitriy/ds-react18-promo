import * as Yup from 'yup';
import { messages } from 'app/messages';

export const formLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.emailInvalid)
    .max(50, messages.toLong50)
    .required(messages.email.required),
  password: Yup.string()
    .min(8, messages.passwToShort)
    .max(50, messages.toLong50)
    .required(messages.requiredPassword),
});

export const formRegisSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+$/, messages.useRussLetters)
    .min(2, messages.toShort2)
    .max(50, messages.toLong50)
    .required(messages.requiredFirstName),
  lastname: Yup.string()
    .matches(/^[a-zA-Z]+$/, messages.useRussLetters)
    .min(2, messages.toShort2)
    .max(50, messages.toLong50)
    .required(messages.requiredLastName),
  email: Yup.string()
    .email(messages.emailInvalid)
    .max(50, messages.toLong50)
    .required(messages.email.required),
  phone: Yup.string()
    .required(messages.required),
  password: Yup.string()
    .min(8, messages.passwToShort)
    .max(50, messages.toLong50)
    .required(messages.requiredPassword),
});

export const formRecovSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.emailInvalid)
    .max(50, messages.toLong50)
    .required(messages.email.required)
});



// export const formRegSchema = Yup.object().shape({
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
//   email: Yup.string()
//     .email(messages.emailInvalid)
//     .max(50, messages.toLong50)
//     .required(messages.requiredEmail),
//   phone: Yup.string()
//     .min(2, messages.toShort2)
//     .max(50, messages.toLong50)
//     .required(messages.requiredPhone),
// });

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


export const formLoginInitial = {
  email: '',
  password: ''
}

export const formRecovInitial = {
  email: '',
}

export const formRegisInitial = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  password: ''
}

export const formSearchInitValues = {
  searchQuery: ""
}

