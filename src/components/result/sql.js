import React from 'react'

/**
 *  Creates SQL output.
 *
 * @param props
 * @constructor
 */
const SqlResult = (props) => {
    let sql = '';
    let tableName = 'table_name';

    if (props.tableName) {
        tableName = props.tableName;
    }

    let headerSql = `INSERT INTO ${tableName}(`;
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
};

export default SqlResult
