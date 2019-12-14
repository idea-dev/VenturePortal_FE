import * as React from "react";
import ApiCalendar from 'react-google-calendar-api/ApiCalendar';
import {any} from "prop-types";


export default class UpcomingEvents extends React.Component {

    constructor(props) {
        super(props);
        // if (ApiCalendar.sign)
        //     ApiCalendar.listUpcomingEvents(10)
        //         .then(({result}: any) => {
        //             console.log(result);
        //             this.upcomingEvents = result.items;
        //         });
    }

    render() {
        return   <ul>
            {/*{this.upcomingEvents.map(item => (*/}
            {/*    <li key={item.id}>*/}
            {/*        <div>{item.id}</div>*/}
            {/*        <div>{item.firstname}</div>*/}
            {/*        <div>{item.lastname}</div>*/}
            {/*        <div>{item.year}</div>*/}
            {/*    </li>*/}
            {/*))}*/}
        </ul>
    }
}