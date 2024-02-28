
export default function useFetch(){

async function getData(url) {
    const res = await fetch(`${url}`);
    const result = await res.json();
    const responseStatus = res.status;

    return [result, responseStatus];
}

async function postData(url, data) {
    const res = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    });

    const result = await res.json();
    const responseStatus = res.status;

    return [result, responseStatus];
}

async function updateData(url, data) {
    const res = await fetch(`${url}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    const result = await res.json();
    const responseStatus = res.status;

    return [result, responseStatus];
}

async function deleteData(url) {
    const res = await fetch(`${url}`, {
        method: "DELETE"
    });

    const result = await res.json();
    const responseStatus = res.status;

    return [result, responseStatus];
}

    return [getData, postData, updateData, deleteData];
}