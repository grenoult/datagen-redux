import React from 'react'
import PropTypes from 'prop-types'
import HtmlResult from './result/html'
import CsvResult from './result/csv'
import SqlResult from './result/sql'

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
        return <HtmlResult result={props.result}/>
    }

    if (props.resultType === 'csv') {
        return <CsvResult result={props.result}/>
    }

    if (props.resultType === 'sql') {
        return <SqlResult result={props.result}/>
    }

    return null;
}

Result.propTypes = {
    loading: PropTypes.bool.isRequired,
    criteriaList: PropTypes.array.isRequired
};

export default Result