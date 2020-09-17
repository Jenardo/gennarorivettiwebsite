import React from 'react'

function Contacts() {
    return(
        <div className="contacts">
            <hr></hr>
            <div className="--hyperlinks">
            <a href="https://www.linkedin.com/in/gennaro-rivetti-38593019b/"><img src="./assets/linkedin.png" alt="Wrong path."></img></a>
            <a href="https://t.me/gennarorivetti"><img src="./assets/telegram.png" alt="Wrong path."></img></a>
            <a href="https://github.com/Jenardo"><img src="./assets/github.png" alt="Wrong path."></img></a>
            </div>
            <div className="--hyperlinks">
                <p id="Copyright">© 2020 Copyright: GennaroRivetti.surge.sh</p>
                <a href="mailto:gennarorivetti00@gmail.com" id="Mail">gennarorivetti00@gmail.com</a>
            </div>
        </div>
    );
}

export default Contacts;