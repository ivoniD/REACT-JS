
const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl)
    const result = await response.json();

    return result.users;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`)
    const result = await response.json();

    return result.user;
};

export const create = async (userData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
        const result = await response.json();

        return result.user;
    } else {
        throw { message: 'Unable to create user' };
    }
}


export const deleteOne = async (id) => {

    const responce = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    });

    const result = await responce.json();

    return result;

}
