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

    if (props.resultType === 'sql') {
        return <Sqlresult result={props.result}/>
    }

    return null;
}

/**
 *  Creates HTML output.
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
 *  Creates CSV output.
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

/**
 *  Creates SQL output.
 *
 * @param props
 * @constructor
 */
function Sqlresult(props) {
    let sql = '';
    let headerSql = 'INSERT INTO table_name(';
    let i = 0;

    for (let record in props.result) {
        if (props.result.hasOwnProperty(record)) {
            for (let j in props.result[record]) {
                if (props.result[record].hasOwnProperty(j)) {
                    if (props.result[record][j]) {
                        // Header
                        if (i === 0) {
                            headerSql = headerSql + j + ', ';
                        }
                        // Column
                        sql = sql + '"' + props.result[record][j] + '", ';
                    }
                }
            }
        }
        sql = sql.slice(0, -2) + '),\n(';
        i++;
    }

    sql = headerSql.slice(0, -2) + ') VALUES \n(' + sql.slice(0, -3) + ';';
    sql = sql.replace(/^\s+|\s+$/g, '');
    return <pre>{sql}</pre>;
}

Result.propTypes = {
    loading: PropTypes.bool.isRequired,
    criteriaList: PropTypes.array.isRequired
};

export default Result