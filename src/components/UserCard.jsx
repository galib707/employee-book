
function UserCard(props) {
    let { title, first, last } = props.user.name
    let { email } = props.user
    let { thumbnail } = props.user.picture

    return (
        <div className="card">
            <img src={thumbnail} className="photo" alt="" />
            <div className="name-emai">
                <p> {`${title} ${first} ${last}`} </p>
                <p>{email}</p>
            </div>

        </div>


    )


}


export default UserCard;