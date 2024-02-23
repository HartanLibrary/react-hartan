import { useState } from "react";

export default function useFetch(userUrl, method){
    const [response, setResponse] = useState("");
    const [result, setResult] = useState("");
    const [responseStatus, setResponseStatus] = useState("");

    const getData = async (url) => {
        const res = await fetch(`${url}`);
        const rslt = await res.json();
        const rs = res.status;

        setResponse(res);
        setResult(rslt);
        setResponseStatus(rs);
    }

    const postData = async (url) => {
        
    }

    if(method.toLowerCase() === "get"){
        getData(userUrl);
    } else if(method.toLowerCase() === "post"){
        postData(userUrl);
    } else{
        return "Method Does Not Exists";
    }

    return [result, responseStatus];
}