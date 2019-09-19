import React from 'react';

function MembersList(props) {
    return (
        <div className='membersList'>
            <h3>Team Members</h3>
            {props.membersList.map((member) =>{
                return (
                    <div className='list' key={member.name}>
                        <p>name: {member.name}</p>
                        <p>email: {member.email}</p>
                        <p>role: {member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MembersList;