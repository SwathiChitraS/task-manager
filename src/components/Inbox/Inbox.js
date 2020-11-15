import React from 'react';

import Style from './Inbox.module.css';
import Icon from '@material-ui/core/Icon';

const inbox = (props) => {
    let inboxRows = [];
    for (let x of props.Data) {
        let temp = (
            <div key={x.id} className={[Style.Inbox, Style.InboxRows].join(' ')} onMouseOver={props.OnMouseOver} onClick={(event) => props.OnRowClick(event, x)}>
                <div className={Style.Id}>
                    {x.id}
                </div>
                <div className={Style.Description}>
                    {x.description}

                </div>
                <div className={Style.Date}>
                    {x.startDate}
                </div>
                <div className={Style.Date}>
                    {x.endDate}
                </div>
                {/* <div className={Style.HoverButton} onClick={props.OnClick}>
                <Icon>edit</Icon>
            </div> */}
            </div>
        );
        inboxRows.push(temp);
    }
    return (
        <div>
            <div className={Style.Inbox}>
                <div className={Style.Id}>
                    Id
                </div>
                <div className={Style.Description}>
                    Description
                </div>
                <div className={Style.Date}>
                    start date
                </div>
                <div className={Style.Date}>
                    end date
                </div>
                {/* <div className={Style.HoverButton} onClick={props.OnClick}>
                    <Icon>edit</Icon>
                </div> */}
            </div>
            {inboxRows}
        </div>

    );
}

export default inbox;