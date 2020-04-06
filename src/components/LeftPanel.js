import React from 'react';

class LeftPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            jsonArray: this.props.jsonArray,
            selectedEmpDetails: this.props.selectedEmpDetails,
            selectedEmpParentNode: this.props.selectedEmpParentNode
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.selectedEmpDetails !== nextProps.selectedEmpDetails){
            return {
                jsonArray: nextProps.jsonArray,
                selectedEmpDetails: nextProps.selectedEmpDetails,
                selectedEmpParentNode: nextProps.selectedEmpParentNode
            }
        } else return null;
    }

    formatContent = (empDetailsObj) => {
        return (
            <div className="empDetailsContainer">
                <div className="img-section">
                    <img src={empDetailsObj.image} alt="employee" />
                </div>
                <p className="emp-name-section">{empDetailsObj.fName} {empDetailsObj.lName}</p>
                <h4 className="emp-designation">{empDetailsObj.designation}</h4>
            </div>
        )
    }

    onChangeSelectedEmpId = (empId) => {
        this.props.onChangeSelectedEmpId(empId);
    }

    selectedEmpParentDetails = (parentEmpId) => {
        const parentElement = this.state.jsonArray.filter((empItem)=>{
            if(empItem.id === parentEmpId){
                return empItem
            } else  return null
        });
        return (
            <div 
                id={parentElement[0].id} 
                onClick={()=>this.onChangeSelectedEmpId(parentElement[0].id)}
                className="parent-employee-section"
            >
                <span>{parentElement[0].fName} {parentElement[0].lName}</span>
            </div>
        )
    }

    fetchOriginContent = () => {
        return(
            <section className="logo-section text-align-center">
                <div className="logo colorwhite">
                </div>
            </section>
        )
    }

    render(){
        const employeeContent = this.formatContent(this.state.selectedEmpDetails);
        return(
            <div className="left-panel-container padding10 colorwhite">
                {
                    !this.state.selectedEmpDetails.upTree ? this.fetchOriginContent() : this.selectedEmpParentDetails(this.state.selectedEmpDetails.upTree)
                }
                <div className="arrow-down"></div>
                <div className="arrow-down marginadjusted"></div>
                {employeeContent}
            </div>
        )
    }
}

export default LeftPanel;
