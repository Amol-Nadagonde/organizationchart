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
            <div className="emp-details-container">
                <div className="img-section">
                    <img src={empDetailsObj.image} alt="employee" />
                </div>
                <p className="emp-name-section">{empDetailsObj.fName} {empDetailsObj.lName}</p>
                <h4 className="emp-designation">{empDetailsObj.designation}</h4>
                <div className="emp-details-table">
                    <div className="emp-details-row">
                        <p className="emp-property">Name</p>
                        <p className="emp-detail-value">{empDetailsObj.fName}</p>
                    </div>
                    <div className="emp-details-row">
                        <p className="emp-property">Last Name</p>
                        <p className="emp-detail-value">{empDetailsObj.lName}</p>
                    </div>
                    <div className="emp-details-row">
                        <p className="emp-property">Id</p>
                        <p className="emp-detail-value">{empDetailsObj.id}</p>
                    </div>
                    <div className="emp-details-row">
                        <p className="emp-property">Location</p>
                        <p className="emp-detail-value">{empDetailsObj.location}</p>
                    </div>
                    <div className="emp-details-row">
                        <p className="emp-property">Email</p>
                        <p className="emp-detail-value email">{`${empDetailsObj.fName}${empDetailsObj.lName}@borngroup.com`.toLowerCase()}</p>
                    </div>
                    <div className="emp-details-row">
                        <p className="emp-property">DoB</p>
                        <p className="emp-detail-value">{`${empDetailsObj.dob}`.split(' ')[0]} {`${empDetailsObj.dob}`.split(' ')[1].slice(0,3)}</p>
                    </div>
                </div>
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
