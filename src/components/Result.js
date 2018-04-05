import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ loading, loaded, result }) => (
    <Resultcontent loading={loading} loaded={loaded} result={result}/>
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

    return (
        <div>
            <Htmlresult result={props.result}/>
        </div>);
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

Result.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    criteriaList: PropTypes.array.isRequired
};

export default Result