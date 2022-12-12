const trigger = function (e){
    let body = JSON.stringify({
        "first_name": e.target.first_name.value,
        "last_name": e.target.last_name.value,
        "phone": e.target.phone.value,
        "email": e.target.email.value
    })

    window.dataLayer = window.dataLayer || [];
    // let call = document.getElementById("form-clicked")

        window.dataLayer.push({
            event: "review_clicked",
            body: body
        })
    console.log(body)
    // datalayer
}

const onForm = function(){

}

export default trigger
