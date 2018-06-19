import React from 'react'

/**
 *  Creates HTML output.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const HtmlResult = (props) => {
    let headers = Object.keys(props.result[0]);
    return (
        <table className="table">
            <thead>
            <tr>
                {
                    headers.map((title,i) =>
                        <th key={i}>{title}</th>
                    )}
            </tr>
            </thead>
            <tbody>
            {
                props.result.map((row, j) =>
                    <tr key={j}>
                        {
                            Object.keys(row).map(i =>
                                <td key={j+'-'+i}>{row[i]}</td>
                            )}
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default HtmlResult
