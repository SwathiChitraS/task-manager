import React, { Component } from 'react';

import axios from 'axios';

import Style from './CreateNewTask.module.css';
import Parent from '../hoc/parent';
import TextInput from '../components/Input/CustomInput/CustomInput';
import TextArea from '../components/Input/CustomTextArea/CustomTextArea';
import DateInput from '../components/Input/CustomDateInput/CustomDateInput';
import Select from '../components/Input/CustomSelect/CustomSelect';
import Button from '../components/Input/CustomButton/CustomButton';


class CreateNewTask extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        projectId: "",
        validated: false,
        disabled: false,
        options: [{
            value: "",
            label: ""
        }],
        statusOptions: [
            {
                value: "New",
                label: "New"
            },
            {
                value:"InProgress",
                label: "InProgress"
            },
            {
                value: "Completed",
                label: "Completed"
            },
            {
                value: "Closed",
                label: "Closed"
            },
        ],
        completed: false,
        validated: false
    }

    cancelClickHandler = () => {
        var updatedState = {
            ...this.state,
            startDate: '',
            endDate: '',
            title: '',
            description: '',
            id: '',
            completed: false,
            validated: false,
            edit: false
        };
        this.setState(updatedState);
    }

    saveClickHandler = () => {
        let data = {
            ...this.state
        }
        delete data.options;
        delete data.statusOptions;
        if (this.state.id !== '' && this.state.startDate !== '' && this.state.endDate !== '' && this.state.projectId !== '') {
            axios.put("https://taskmanager-58f82.firebaseio.com/data/" + this.state.projectId + "/Task/" + this.state.id + ".json", data)
                .then(response => {
                    this.cancelClickHandler();
                });
        } else {
            let validated = true;
            this.setState({ validated: validated });
        }
    };

    deleteClickHandler = () => {
        let data = {
            ...this.state
        }
        if (this.state.id !== '' && this.state.startDate !== '' && this.state.endDate !== '' && this.state.title !== '') {
            axios.delete("https://taskmanager-58f82.firebaseio.com/data/" + this.state.projectId + "/Task/" + this.state.id + ".json", data)
                .then(response => {
                    this.cancelClickHandler();
                });
        } else {
            let validated = true;
            this.setState({ validated: validated });
        }
    };

    componentDidMount() {
        axios.get("https://taskmanager-58f82.firebaseio.com/data.json")
            .then(response => {
                if (response.data !== null) {
                    let options = [
                        ...this.state.options
                    ];
                    for (let x in response.data) {
                        let data = {
                            value: x,
                            label: x
                        }
                        options.push(data)
                    }
                    this.setState({ options: options });
                }
            });
        let data = {
            ...this.setState,
            ...this.props.location.state
        }
        if (this.props.location.state.edit) {
            data['disabled'] = true;
        }
        if (this.props.location.state.changeStatus) {
            data['disabled'] = true;
            data['changeStatus'] = false;
        }
        console.log(data);
        this.setState(data)
    }
    render() {
        return (
            <Parent>
                <div className={this.state.validated ? Style.Show : Style.Hide}>
                            <h4>Fill The Necessary Fields</h4>
                </div>
                <div className={Style.CreateNewTask}>
                    {
                        this.state.edit ?
                            (<div className={Style.ButtonContainer}>
                                <Button OnClick={() => this.setState({ disabled: false, changeStatus: false})}>Edit</Button>
                                <Button OnClick={() => this.deleteClickHandler()}>Delete</Button>
                            </div>)
                            :
                            <div></div>
                    }
                    <TextInput Label="Task Id" Value={this.state.id} Disabled={this.props.location.state.edit || this.props.location.state.changeStatus}
                        OnChange={(event) => this.setState({ "id": event.target.value })}></TextInput>
                    <TextInput Label="Title" Value={this.state.title} Disabled={this.state.disabled}
                        OnChange={(event) => this.setState({ "title": event.target.value })}></TextInput>
                    <Select Label="Project Id" Options={this.state.options} Value={this.state.projectId} Disabled={this.props.location.state.edit || this.props.location.state.changeStatus}
                        OnChange={(event) => this.setState({ "projectId": event.target.value })}></Select>
                    <Select Label="Status" Options={this.state.statusOptions} Value={this.state.status} Disabled={this.state.changeStatus}
                        OnChange={(event) => this.setState({ "status": event.target.value })}></Select>
                    <TextArea Label="Description" Value={this.state.description} Disabled={this.state.disabled}
                        OnChange={(event) => this.setState({ "description": event.target.value })}></TextArea>
                    <DateInput Label="Start Date" Value={this.state.startDate} Disabled={this.state.disabled}
                        OnChange={(event) => this.setState({ "startDate": event.target.value })}></DateInput>
                    <DateInput Label="End Date" Value={this.state.endDate} Disabled={this.state.disabled}
                        OnChange={(event) => this.setState({ "endDate": event.target.value })}></DateInput>
                </div>
                <div className={Style.ButtonContainer}>
                    <Button OnClick={this.saveClickHandler} Disabled={this.state.disabled}>Save</Button>
                    <Button OnClick={this.cancelClickHandler} Disabled={this.state.disabled}>Cancel</Button>
                </div>
            </Parent>
        );
    }
}

export default CreateNewTask;