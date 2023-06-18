import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sortTable';import { tab } from '@testing-library/user-event/dist/tab';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: [],
      elements: [...this.props.data]
    }
    this.state.isCheck.length = Object.keys(props.data[0]).length;
    this.state.isCheck.fill(false, 0, this.state.isCheck.length);
  }

  check(index) {
    let field = Object.keys(this.state.elements[0])[index];
    this.setState(({isCheck, elements}) => {
      isCheck[index] = !isCheck[index];
      if (this.state.isCheck.includes(true))
        elements = this.sortTableData(this.state.elements, field)
      else
        elements = [...this.props.data];
      return {isCheck, elements};
    });
  }

  sortTableData = (array, sortBy) => {
    return array.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  }

  render() {
    const headers = Object.keys(this.state.elements[0]);
    const listRow = this.state.elements.map((obj) => {
      return (
        <tr>
          {Object.values(obj).map((item, index) => {
            return (
              <td className={index}>
                {item}
              </td>
            );
          })}
        </tr>
      );
    });

    return (
      <>
        <div>
          {headers.map((e, index) => {
            return (
              <div>
                <label className={index}>
                  <input type="radio"
                        checked={this.state.isCheck[index] ? "checked" : null}
                        onChange={() => this.check(index)}   
                  />
                  {e}
                </label>
              </div>
            );    
          })}
        </div>
        <table id="table">
          <thead>
            {headers.map((item, index) => {
              return (
                <th className={index}>
                  {item}
                </th>
              );
            })}
          </thead>
          <tbody>
            {listRow}
          </tbody>
        </table>
      </>
    );
  }
}

/*----------------------------------------------------------------------------------------------------------------*/
const tableData = [
  {
    name: 'Nate',
    number: 4,
    description: 'Higgers'
  },
  {
    name: 'Tube',
    number: 25,
    description: 'Topological shape'
  },
  {
    name: 'Chair',
    number: -1,
    description: 'Sitting device'
  },
  {
    name: 'Aluminum siding',
    number: 2,
    description: 'Building material'
  },
  {
    name: 'Jade buddha',
    number: 0,
    description: 'Безделушка'
  },
  {
    name: 'Knob',
    number: 23,
    description: 'Adjective'
  },
  {
    name: 'Tangerine',
    number: 5,
    description: 'Fruit'
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Table data={tableData} />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
