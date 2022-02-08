const ApiCall = async (_path, _method, _body) => {
    const response = await fetch("http://localhost:4000" + _path, {
        method: _method,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.token
        },
        body: JSON.stringify(_body)
    })
    const apiData = await response.json();

    return apiData
}

export default ApiCall;