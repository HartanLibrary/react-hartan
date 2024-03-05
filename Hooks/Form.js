import { useState, useEffect } from "react";
import useFetch from "./Fetch";

export default function useForm(actionURL) {

    const [data, setData] = useState({});
    const [, postData] = useFetch();
    const [submitted, setSubmitted] = useState(false);
    let [result, responseStatus] = "";
    const [returnValue, setReturnValue] = useState({});

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const submit = async (e) => {
        e.preventDefault();
        [result, responseStatus] = await postData(actionURL, data);
        setSubmitted(true);
        e.target.reset();
        setReturnValue({
            result: result,
            responseStatus: responseStatus
        })
    };

    useEffect(() => {
        setTimeout(() => {
            setSubmitted(false);
        }, 2500);
    }, [submitted]);

    return [updateData, submit, submitted, returnValue];
}