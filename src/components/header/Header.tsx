import React from "react";
import Moment from 'moment';

import "./styles.css";

const Header = () => {
    Moment.locale('en');
    const now = Moment().format('MMMM Do')
    return (
        <header>
            <h2 className='header-title'><b>The word for {now} is ...</b></h2>
        </header>
    );
};

export default Header;