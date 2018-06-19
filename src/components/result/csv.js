import React from 'react'

/**
 *  Creates CSV output.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const CsvResult = (props) => {
    let headers = Object.keys(props.result[0]);
    let csv = headers.join(',') + "\n";

    for (let i in props.result) {
        if (props.result.hasOwnProperty(i)) {
            for (let j in props.result[i]) {
                if (props.result[i].hasOwnProperty(j)) {
                    csv = csv + props.result[i][j] + ',';
                }
            }
        }

        csv = csv.slice(0, -1) + "\n";
    }

    return <pre>{csv}</pre>;
};

export default CsvResult