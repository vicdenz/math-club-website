import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext);

    return (
        <div>
            <h1>Log In</h1>
            <div>
				<form onSubmit={loginUser}>
					<input 
						type="text" 
						name="username" 
						placeholder="Enter Username" 
					/>
					<input 
						type="password" 
						name="password" 
						placeholder="Enter Password" 

					/>
					<input 
						type="submit" 
						value="Log In" 
					/>
				</form>
            </div>
        </div>
    );
}

export default LoginPage;
