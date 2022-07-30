import styled from 'styled-components'

const BasicNotification = styled.p`
    background: lightblue;
    padding: 5px;
    margin: 5px;
    color: black;
`;

const SuccessNotification = styled(BasicNotification)`
    background: lightgreen;
`;

const ErrorNotification = styled(BasicNotification)`
    background: lightcoral;
    font-weight: bold;
`;

function Notification(props) {
    return (
        <div>
            <BasicNotification>Basic Message</BasicNotification>
            <SuccessNotification>Success Message</SuccessNotification>
            <ErrorNotification>Error Message</ErrorNotification>
        </div>
    );
}

export default Notification;
