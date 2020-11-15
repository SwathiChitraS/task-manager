import React, { Component } from 'react';
// import createHistory from 'history/createBrowserHistory'

import axios from 'axios';

import Style from './TaskManager.module.css';
import Parent from '../hoc/parent';
import Button from '../components/Input/CustomButton/CustomButton';
import Inbox from '../components/Inbox/Inbox';
import NewProject from './CreateNewProject';
import NewTask from './CreateNewTask';
import CustomLink from '../components/Input/CustomLink/CustomLink';

class TaskManager extends Component {
    state = {
        show: false,
        user: '',
        rows: [],
        taskRows: [],
        projectData: {},
        taskData: {},
        showTask: false,
        changeStatus: false
    }
    componentDidMount() {
        let userDetails = "";
        if ((this.props && this.props.location && this.props.location.state) && (this.props.location.state.user === "admin" || this.props.location.state.user === "manager" || this.props.location.state.user === "developer")) {
            if (this.props.location.state.user === "admin") {
                userDetails = "admin";
            } else if (this.props.location.state.user === "manager") {
                userDetails = "manager";
            } else if (this.props.location.state.user === "developer") {
                userDetails = "developer";
            }
            this.props.location.state.user = "";
            this.setState({ show: true, user: userDetails });
        }

        axios.get("/data.json")
            .then(response => {
                if (response.data !== null) {
                    let items = [];
                    let subject = [
                        ...this.state.rows
                    ];
                    let tempData = {};
                    for (let x in response.data) {
                        tempData = response.data[x];
                        subject.push(tempData);
                    }
                    this.setState({ rows: subject });
                    console.log(response.data);
                }
            });
    }
    rowClickhandler = (event, data) => {
        let link = document.getElementsByTagName("a")[0];
        if (this.state.user === "admin") {
            data['edit'] = true;
            this.setState({ projectData: data }, () => {
                link.click();
            });
        } else if (this.state.user === "manager" || this.state.user === "developer") {
            let subject = [];
            let tempData = {};
            for (let x in data["Task"]) {
                tempData = data["Task"][x];
                subject.push(tempData);
            }
            this.setState({ taskRows: subject, showTask: true });
        }
        console.log(data);
    }

    taskClickhandler = (event, data) => {
        let link = document.getElementsByTagName("a")[0];
        if (this.state.user === "manager") {
            data['edit'] = true;
            this.setState({ taskData: data }, () => {
                link.click();
            });
        } else if (this.state.user === "developer") {
            data['edit'] = false;
            data['changeStatus'] = true;
            this.setState({ taskData: data }, () => {
                link.click();
            });
        }
        console.log(data);
    }

    render() {
        let doShow = null;
        if (this.state.user === "admin") {
            doShow = <CustomLink Url="/NewProject" Display={true} CustomStyle={{ width: 300 + "px" }} States={this.state.projectData}>New Project</CustomLink>;
        } else if (this.state.user === "manager") {
            doShow = <CustomLink Url="/NewTask" Display={true} CustomStyle={{ width: 300 + "px" }} States={this.state.taskData}>New Task</CustomLink>
        } else if (this.state.user === "developer") {
            doShow = <CustomLink Url="/NewTask" Display={false} CustomStyle={{ width: 300 + "px" }} States={this.state.taskData}>New Task</CustomLink>
        }
        return (
            <Parent>
                {
                    this.state.show ?
                        <div className={Style.TaskManager}>
                            <div className={Style.ButtonContainer}>
                                {
                                    doShow
                                }
                            </div>
                            <div className={Style.InboxContainer}>
                                <Inbox Data={this.state.rows} OnRowClick={this.rowClickhandler}></Inbox>
                            </div>
                            {
                                this.state.showTask ? (
                                    <div className={Style.InboxContainer}>
                                        <Inbox Data={this.state.taskRows} OnRowClick={this.taskClickhandler}></Inbox>
                                    </div>)
                                    :
                                    null
                            }
                        </div>
                        :
                        <div>
                            UnAuthorized Login
                        </div>
                }

            </Parent>
        );
    }
}

export default TaskManager;