import * as yup from "yup"

const SubmitSchema = yup.object().shape({
    name: yup.string().required("Please enter your for booking"),
    telephone: yup.string().required("Please enter your telephone number").matches(/^[0-9]+$/, "Must only be digit").min(11, "Must exactly 11 digits").min(11,"Must exactly 11 digit"),
    numPeople:yup.number().required("Please enter how many people are coming"),
    bookingDate: yup.string().required("Please enter your booking date"),
    bookingTime:yup.string().required("Please enter your booking time"),
});

export default SubmitSchema