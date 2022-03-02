import React from 'react'
import { connect } from 'react-redux'
import ImportSqlTextarea from '../components/ImportSqlTextarea';
import ResultContainer from './ResultContainer';
import { resetResult } from '../actions/result';

class ImportSqlContainerComponent extends React.Component {
  componentDidMount() {
    this.props.resetResult();
  }

  render() {
    return (<div>
      <h1>Import SQL</h1>
      <p>Upload a SQL File or paste a SQL script: we will generate data based on table structure.</p>
      <ImportSqlTextarea></ImportSqlTextarea>
      <ResultContainer/>
    </div>);
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  resetResult
};

const ImportSqlContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImportSqlContainerComponent);

export default ImportSqlContainer