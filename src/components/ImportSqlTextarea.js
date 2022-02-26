import React from 'react';
import { connect } from 'react-redux';
import { getResultFromScript, changeResultType } from '../actions/form';

class ImportSqlTextareaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sqlScript: ''
    }
  }
  
  updateTextareaValue(e) {
    this.setState({ sqlScript: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeResultType('sql_from_script');
    this.props.getResultFromScript(this.state.sqlScript, 10);
  }
  
/*
  TODO manage slow queries and errors
*/

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="importSqlTextArea">Paste SQL script here: </label>
            <textarea className="form-control" 
                      id="importSqlTextArea" 
                      rows="6"
                      onChange={(e) => this.updateTextareaValue(e)}></textarea>
          </div>
          <button id="generate-sql-btn"
                  type='submit'
                  className='form-control mb-2 mr-sm-2 btn btn-primary'>
              Generate random data based on SQL
              {/* TODO disable when loading */}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loading: state.result.loading,
    loaded: state.result.loaded,
    result: state.result.data,
});

const mapDispatchToProps = {
    changeResultType,
    getResultFromScript,
};

const ImportSqlTextarea = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImportSqlTextareaComponent);

export default ImportSqlTextarea;
