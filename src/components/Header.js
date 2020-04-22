import React from 'react';

function SearchedListContent(props){
  return(
    props.filteredList.map((empItem, index) => {
      return (
        <div key={index} className="search-list-item" onClick={()=>props.onClickFilteredEmpItem(empItem.id)}>
          {empItem.fName} {empItem.lName}
        </div>
      )
    })
  )
}
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jsonArray: this.props.jsonArray,
      searchValue: '',
      showSearchList: false,
      filteredList: []
    }
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.jsonArray !== nextProps.jsonArray){
        return {
            jsonArray: nextProps.jsonArray
        }
    } else return null;
  }

  getFilteredEmployeesFromJSON = () => {
    const filteredEmpItem = this.state.jsonArray.filter((empItem, index) => {
      if(`${empItem.fName}`.toLowerCase().includes(`${this.state.searchValue}`.toLowerCase()) || `${empItem.lName}`.toLowerCase().includes(`${this.state.searchValue}`.toLowerCase())){
        return empItem
      } else return null
    });
    this.setState({
      filteredList: filteredEmpItem
    });
  }

  onSearchChange = (event) => {
    if(!event.target.value.length){
      this.setState({
        showSearchList: false
      })
    }
    this.setState({
      searchValue: event.target.value
    }, () => {
      this.getFilteredEmployeesFromJSON(this.state.searchValue);
    });
  }

  onSearchKeyUp = () => {
    if(this.state.searchValue.length >= 3){
      this.setState({
        showSearchList: true
      })
    } else {
      this.setState({
        showSearchList: false
      })
    }
  }

  onClickFilteredEmpItem = (empId) => {
    this.props.onClickFilteredEmpItem(empId);
    this.setState({
      showSearchList: false
    })
  }

  render(){
    return (
      <header className="header">
          <section className="logo-section">
            <div className="logo colorwhite">
            </div>
          </section>
          <section className="search-section">
            <input 
              className="search-input"
              type="search"
              placeholder="Search employee..."
              onChange={this.onSearchChange}
              value={this.state.searchValue}
              onKeyUp={this.onSearchKeyUp}
            />
            {this.state.showSearchList && 
              <div className="search-list-panel">
                {this.state.filteredList.length ?
                  <SearchedListContent 
                    filteredList={this.state.filteredList} 
                    onClickFilteredEmpItem = {(empId) => this.onClickFilteredEmpItem(empId)}
                  />
                  : `Loading`
                }
              </div>
            }
          </section>
      </header>
    );
  }
}

export default Header;
