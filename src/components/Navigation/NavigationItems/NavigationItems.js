import React from 'react';

import Styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
// import CustomDateInput from '../../Input/CustomDateInput/CustomDateInput';

class NavigationItems extends React.Component {
    state = {
        date: '',
        today: ''
    }
    OnChangeHandler = (event) => {
        this.setState({ date: event.target.value })
    }
    componentDidMount() {
        let date = new Date();
        let today = date.getFullYear() + "-" + ((date.getMonth() + 1) + "").padStart(2, '0') + "-" + (date.getUTCDate() + "").padStart(2, '0');
        this.setState({ today: today });
    }
    render() {
        return (
            <ul className={Styles.NavigationItems}>
                <NavigationItem linkUrl="/search" Params={""} State={""}>ALL</NavigationItem>
                <NavigationItem linkUrl="/search" Params={"date=" + this.state.today} State={this.state.today}>Today</NavigationItem>
                <div className={Styles.List}>
                    {/* <CustomDateInput OnChange={(event) => this.OnChangeHandler(event)} value={this.state.date}></CustomDateInput> */}
                    <NavigationItem linkUrl="/search" Params={"date=" + this.state.date} State={this.state.date}>
                        search
                </NavigationItem>
                </div>
            </ul>
        );
    }
}

export default NavigationItems;