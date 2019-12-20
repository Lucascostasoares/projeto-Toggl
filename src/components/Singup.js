import React from 'react';

class Singup extends React.Component {
    render() {
        return (
            <div className="login-column">
                <form className="login-form">
                    <label>
                        <input type="text" placeholder="E-mail" />
                    </label>
                    <label>
                        <input type="text" placeholder="Senha" />
                    </label>
                    <label>
                        <input type="text" placeholder="email" />
                    </label>

                </form>
            </div>
        )
    }
}

export default Singup;
