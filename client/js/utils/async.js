export const fetchFromApi = url => fetch(url)
    .then((response) => response.json()) // Transform the data into json
    .then(data => {
        return {
            success: true,
            ...data
        }
    })
    .catch(error => {
        return {
            success: false,
            ...error
        }
    });