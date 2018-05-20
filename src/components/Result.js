import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ loading, loaded, result, resultType }) => (
    <Resultcontent loading={loading} loaded={loaded} result={result} resultType={resultType}/>
);

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Resultcontent(props) {
    if (!props.loading && !props.loaded) {
        return null;
    }

    if (props.loading && !props.loaded) {
        return (
            <div>Generating...</div>
        );
    }

    if (props.resultType === 'html') {
        return <Htmlresult result={props.result}/>
    }

    if (props.resultType === 'csv') {
        return <Csvresult result={props.result}/>
    }

    return null;
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Htmlresult(props) {
    let headers = Object.keys(props.result[0]);
    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map(title =>
                            <td>{title}</td>
                        )}
                </tr>
            </thead>
            <tbody>
            {
                props.result.map(row =>
                    <tr>
                        {
                            Object.keys(row).map(i =>
                                <td>{row[i]}</td>
                            )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Csvresult(props) {
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
}

Result.propTypes = {
    loading: PropTypes.bool.isRequired,
    criteriaList: PropTypes.array.isRequired
};

export default Result