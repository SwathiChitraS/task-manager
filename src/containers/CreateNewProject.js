import React, { Component } from 'react';

import axios from 'axios';

import Style from './CreateNewProject.module.css';
import Parent from '../hoc/parent';
import TextInput from '../components/Input/CustomInput/CustomInput';
import TextArea from '../components/Input/CustomTextArea/CustomTextArea';
import DateInput from '../components/Input/CustomDateInput/CustomDateInput';
import Button from '../components/Input/CustomButton/CustomButton';


class CreateNewProject extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        validated: false,
        disabled: false
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
        // data[this.state.id] = {
        //     ...this.state
        // }
        if (this.state.id !== '' && this.state.startDate !== '' && this.state.endDate !== '' && this.state.title !== '') {
            axios.put("/data/" + this.state.id + ".json", data)
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
            axios.delete("/data/" + this.state.id +".json", data)
                .then(response => {
                    this.cancelClickHandler();
                });
        } else {
            let validated = true;
            this.setState({ validated: validated });
        }
    };

    componentDidMount() {
        let data = {
            ...this.setState,
            ...this.props.location.state
        }
        if(this.props.location.state.edit){
            data['disabled'] = true;
        }
        console.log(data);
        this.setState(data)
    }

    render() {
        return (
            <Parent>
                <div className={Style.CreateNewProject}>
                    {
                        this.state.edit ? 
                            (<div className={Style.ButtonContainer}>
                                <Button OnClick={() => this.setState({disabled:false})}>Edit</Button>
                                <Button OnClick={() => this.deleteClickHandler()}>Delete</Button>
                            </div>)
                        :
                            <div></div>
                    }

                    <TextInput Label="Project Id" Value={this.state.id} Disabled={this.props.location.state.edit}
                        OnChange={(event) => this.setState({ "id": event.target.value })}></TextInput>
                    <TextInput Label="Title" Value={this.state.title} Disabled={this.state.disabled}
                        OnChange={(event) => this.setState({ "title": event.target.value })}></TextInput>
                    <TextArea Label="Project Description" Value={this.state.description} Disabled={this.state.disabled}
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

export default CreateNewProject;