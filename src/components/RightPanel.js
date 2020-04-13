import React from 'react';
import {useTrail, animated} from 'react-spring';

const SpringAnimation = ({arrayToAnimate, onClickFunction}) => {
    const animatedTrail = useTrail(arrayToAnimate.length, {
        from: { marginTop: -10, opacity: 0, transform: 'translate3d(0,-20px,0)' },
        to: { marginTop: 10, opacity: 1, transform: 'translate3d(0,0px,0)' }
    });
    return (
        <React.Fragment>
          {animatedTrail.map((props, index)=>{
            return(
                <animated.div 
                    style={props} 
                    className="reportee-item"
                    key={index} 
                    id={arrayToAnimate[index].id}
                    onClick={()=>onClickFunction(arrayToAnimate[index].id)}
                >
                    <div className="img-section">
                        <img src={arrayToAnimate[index].image} alt="employee" />
                    </div>
                    <p>{`${arrayToAnimate[index].fName} ${arrayToAnimate[index].lName}`}</p>
                    <h4>{arrayToAnimate[index].designation}</h4>
                </animated.div>
            )
          })}
        </React.Fragment>
      )
}

class RightPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            jsonArray: this.props.jsonArray,
            reporteeArray: this.props.reporteeArray
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
        });
        return (
            <div className="right-panel-container padding10 fullwidth">
                <h3 className="reportee-title">{managerDetails} {reporteeArrayContent.length ? `has the following reportees:` : `has no reportees.`}</h3>
                <div className="reportee-container">
                    <SpringAnimation arrayToAnimate={reporteeArrayContent} onClickFunction={this.onChangeSelectedEmpId} />
                </div>
            </div>
        );
    }
}

export default RightPanel;
