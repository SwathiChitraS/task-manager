import React, { Component } from 'react';

import Style from './Login.module.css';
import Parent from '../../hoc/parent';
import TextInput from '../../components/Input/CustomInput/CustomInput';
import Password from '../../components/Input/CustomPassword/CustomPassword';
import DateInput from '../../components/Input/CustomDateInput/CustomDateInput';
import Button from '../../components/Input/CustomButton/CustomButton';
import CustomLink from '../../components/Input/CustomLink/CustomLink';


class Login extends Component {
    state = {
        userName: "",
        password: "",
        loginDetails: {
            user: ""
        }
    }
    onClickLogin = () => {
        let details = {
            ...this.state.loginDetails
        }
        let link = document.getElementsByTagName("a")[0];
        if (this.state.userName === "admin" && this.state.password === "Admin") {
            details.user = "admin";
            this.setState({ loginDetails: details }, () => {
                link.click();
                this.setState({loginDetails:{}});
            });
        } else if (this.state.userName === "manager" && this.state.password === "Manager") {
            details.user = "manager";
            this.setState({ loginDetails: details }, () => {
                link.click();
                this.setState({loginDetails:{}});
            });
        } else if (this.state.userName === "developer" && this.state.password === "Developer") {
            details.user = "developer";
            this.setState({ loginDetails: details }, () => {
                link.click();
                this.setState({loginDetails:{}});
            });
        } else {
            alert("Invalid UserName or Password");
        }
    }
    render() {
        return (
            <Parent>
                <div className={Style.Login}>
                    <div className={Style.Background}>
                        <TextInput Label="User Name" OnChange={(event) => {
                            this.setState({ userName: event.target.value })
                        }}></TextInput>
                        <Password Label="Password" OnChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}></Password>
                        <Button CustomStyle={{ minWidth: 100 + "%", paddingTop: 32 + "px" }}
                            OnClick={this.onClickLogin}>Login</Button>
                        <div className={Style.Hide}>
                            <CustomLink Url="/TaskManager" CustomStyle={{ width: 300 + "px" }} States={this.state.loginDetails}>New Project</CustomLink>
                        </div>
                    </div>
                </div>
            </Parent>
        );
    }
}

export default Login;