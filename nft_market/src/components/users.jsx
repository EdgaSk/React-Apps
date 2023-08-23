import './styles/Users.css';
import PropTypes from "prop-types";

const Users= (props) => {

    return(
        <div className='usersCointainer'>
            <img className='avatarImage' src={props.avatarUrl} alt="" />
            <div className='userName'>{props.userName}</div>
            <div className='salesInfo'>{props.userSales}&nbsp;{props.userCrypto}</div>
        </div>
    )
}

Users.propTypes = {
    avatarUrl: PropTypes.string,
    userName: PropTypes.string,
    userSales: PropTypes.number,
    userCrypto: PropTypes.string,
}

export default Users;