import React from 'react';

class RightPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            jsonArray: this.props.jsonArray,
            reporteeArray: this.props.reporteeArray,
            tempArray: [] /* this array is to render the reportee one after another */
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.reporteeArray !== nextProps.reporteeArray){
            return {
                jsonArray: nextProps.jsonArray,
                reporteeArray: nextProps.reporteeArray
            }
        } else return null;
    }

    onChangeSelectedEmpId = (empId) => {
        this.props.onChangeSelectedEmpId(empId);
    }

    componentDidMount(){
        console.log('in did mount');
        // for(let i = 0; i < this.state.reporteeArray.length; i++){
        //     ((i)=>{
        //         setTimeout(()=>{
        //             console.log('in timeout');
        //         }, i * 800)
        //     })(i);
        // }
    }

    fetchParentEmployeeOfReportees = () => {
        const filteredItem = this.state.jsonArray.filter(empItem => {
            if(this.state.reporteeArray === empItem.downTree){
                return empItem
            } else return null
        });
        return(
            <span>{filteredItem[0].fName} {filteredItem[0].lName}</span>
        )
    }

    render(){
        const managerDetails = this.fetchParentEmployeeOfReportees();
        const reporteeArrayContent = this.state.jsonArray.filter((empItem, index)=>{
            if( this.state.reporteeArray.includes(empItem.id) ){
                return empItem
            } else return null
        }).map((empItem, index)=>{
            return(
                <div className="reportee-item" key={index} onClick={()=>this.onChangeSelectedEmpId(empItem.id)}>
                    <div className="img-section">
                        <img src={empItem.image} alt="employee" />
                    </div>
                    <p>{`${empItem.fName} ${empItem.lName}`}</p>
                    <h4>{empItem.designation}</h4>
                </div>
            )            
        })
        return (
            <div className="right-panel-container padding10 fullwidth">
                <h3 className="reportee-title">{managerDetails} has the following reportees:</h3>
                <div className="reportee-container">
                    {reporteeArrayContent}
                </div>
            </div>
        );
    }
}

export default RightPanel;
