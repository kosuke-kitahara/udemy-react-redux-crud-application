import React from 'react';
import propTypes from 'prop-types';

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: "5"},
        {name: "Noname", age: 3}
    ]
    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profiles.name} age={profile.age} key={index}/>
                })
        }
        </div>
    )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.propTypes = {
    name: propTypes.string, 
    age: propTypes.number.isRequired
}

export default App;
