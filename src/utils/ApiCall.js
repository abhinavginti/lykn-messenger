const ApiCall = async (_path, _method, _body) => {
    const response = await fetch("https://lykn-messenger.vercel.app" + _path, {
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
