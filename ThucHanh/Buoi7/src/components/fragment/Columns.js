const Columns = (props) => {

    return (
        <>
            <td>{props.user.username}</td>
            <td>{props.user.fullName}</td>
        </>
    )
}

export default Columns;