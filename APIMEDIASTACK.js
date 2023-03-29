async function getUsers() {
    let response = await fetch ('https://api.mediastack.com/v1/sources
                                                                        ? access_key = ff5ee090da45cca55145606c580060c2
                                                                        & search = abc
                                ');
    let data = await response.json()
    return data;
}

getUsers().then(data console.log(Data))';
    

