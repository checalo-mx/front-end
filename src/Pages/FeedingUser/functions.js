export const handleUserTypeOfDiet = (e, userInfo, setUserInfo) => {
    if ( e.target.name !== userInfo.typeOfDiet){
        setUserInfo({...userInfo, typeOfDiet: e.target.name})
    }
}

export const handleUserAllergies = (e, userInfo, setUserInfo) => {
    setUserInfo({...userInfo, allergies: [{...userInfo.allergies[0], [e.target.name]: e.target.checked }]})
}

export const handleSubmit = (e, userInfo, user, openSnackbar, navigate) => {
    e.preventDefault();
    fetch("https://checalo-mx-api.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify(userInfo),
        headers: {
            "token": user.token,
            "Content-Type": "application/json",
        },
    })
    .then(result => result.json())
    .then(data => {
        if (data.ok){
            openSnackbar("Tu información de alimentación ha sido actualizada.", "success");
            navigate("/home");
        } else {
            openSnackbar("No pudimos actualizar tu información, intenta más tarce", "error");
        }
    })
    .catch(err => openSnackbar("¡Opps! Tenemos problemas, intenta más tarde", "error") );
}

export const getUserInfo = (user, setUserInfo, openSnackbar) => {
    fetch("https://checalo-mx-api.herokuapp.com/users/info", {
        headers: {
            token: user.token,
        }
    })
    .then( result => result.json() )
    .then( data => setUserInfo(data.payload) )
    .catch(err => openSnackbar("¡Opps! Tenemos problemas, intenta más tarde", "error"))
}