import React from 'react'

class HelpContainerComponent extends React.Component {
    render() {
        return (<div>
            <h2>Data Types</h2>
            <h3>Integer</h3>
            <p>Can be positive, negative, both or incremental. Incremental
                starts at 1. Range is between -1 000 000 and 1 000 000.</p>
            <h3>Regular Expression</h3>
            <p>Generate a string from a regular expression.</p>
            <h4>Examples:</h4>
            <ul>
                <li>Random word of 10 characters: <code>[a-z]{10}</code></li>
                <li>Australian Phone Number: <code>\(0[23478]\)9[0-9]{3}-[0-9]{4}</code></li>
                <li>Australian Post Code: <code>(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})</code></li>
                <li>Australian Mobile Phone Number: <code>\+6104([01]\d{3}|(2[1-9]|3[0-57-9]|4[7-9]|5[0-35-9]|6[679]|7[078]|8[178]|9[7-9])\d{2}|(20[2-9]|444|68[3-9]|79[01]|820|901)\d|(200[01]|2010|8984))\d{4}</code></li>
                <li>Mastercard Credit Card Number: <code>^5[1-5][0-9]{14}$</code></li>
                <li>Visa Credit Card Number: <code>^4[0-9]{12}(?:[0-9]{3})?$</code></li>
            </ul>
            <h3>Date</h3>
            <p>Can be past, future or both. Dates starts from 1st of January 1970.</p>
            <h3>Phone number</h3>
            <p>Can be Australian, American or British.</p>
            <h3>Firstname</h3>
            <p>Can be an English male or female firstname.</p>
            <h3>Surname</h3>
            <p>Generates an American surname.</p>
            <h3>City</h3>
            <p>Generates an American city name.</p>
            <h3>Postcode</h3>
            <p>Generates an American Postcode on 5 digits.</p>
            <h3>State</h3>
            <p>Generates one the fifty American states.</p>
            <h3>Street</h3>
            <p>Generates an English street name.</p>
            <h3>Street number</h3>
            <p>Generates a street number between 1 and 500.</p>
        </div>);
    }
}

export default HelpContainerComponent