import React from 'react';
import axios from 'axios';

import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      screenHeight: window.innerHeight + 'px',
      selectedEmpId: 1, /* this property tells which employee is selected to show details on the screen */
      jsonArray: [], /* it is the array of empolyees retrived from database */
      selectedEmpDetails: {}, /* filtered the details of employee, we need to show on left panel */
      reporteeArray: [] /* filtered the reportees of selected employee to show in the right panel */
    }
  }

  setHeightOfMainContainer = () => {
    if(window.innerHeight > 500){
      this.setState({
        screenHeight: (window.innerHeight - 100) + 'px',
      })
    }
  }

  filterEmpInfo = (arrayToFilter, selectedEmpId, empInfo) => {
    const filteredItem = arrayToFilter.filter((empItem)=>{
      if(empItem.id === selectedEmpId){
        return empItem
      } else return null
    });
    if(empInfo === "empDetails"){
      return filteredItem[0];
    } 
    if(empInfo === "empReportees") {
      return filteredItem[0].downTree
    }
    if(empInfo === "empParentNode") {
      return filteredItem[0].upTree
    }
  }  

  componentDidMount(){
    this.setHeightOfMainContainer();
    window.addEventListener("resize", this.setHeightOfMainContainer.bind(this));
    
    axios.get("orgchart.json")
      .then(result => {
        const jsonArray = result.data;

        this.setState({ 
          jsonArray: jsonArray,
        });
      });
  }

  onChangeSelectedEmpId = (empId) => {
    this.setState((prevState)=>{
      return {
        selectedEmpId: prevState.selectedEmpId !== empId ? empId : prevState.empId
      }
    });
  }

  render(){
    if(this.state.jsonArray.length){
      return(
        <React.Fragment>
          <Header/>
          <div className="main-body" style={{height: `${this.state.screenHeight}`}}>
            <LeftPanel 
              jsonArray={this.state.jsonArray}
              selectedEmpDetails={this.filterEmpInfo(this.state.jsonArray, this.state.selectedEmpId, "empDetails")}
              selectedEmpParentNode={this.filterEmpInfo(this.state.jsonArray, this.state.selectedEmpId, "empParentNode")}
              onChangeSelectedEmpId={(empId)=>this.onChangeSelectedEmpId(empId)}
            />
            <RightPanel 
              jsonArray={this.state.jsonArray}
              reporteeArray={this.filterEmpInfo(this.state.jsonArray, this.state.selectedEmpId, "empReportees")}
              onChangeSelectedEmpId={(empId)=>this.onChangeSelectedEmpId(empId)}
            /> 
          </div>
          <Footer />
        </React.Fragment>
      )
    } else {
      return (
        <div className="loading">
          Loading...
        </div>
      )
    }
  }
}

export default App;
