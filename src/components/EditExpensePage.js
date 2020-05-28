import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses'
import ConfirmationModal from './ConfirmationModal';

export class EditExpensePage extends React.Component {
    state = {
        removeClicked: false
    }
    onSubmit = (expense)=>{
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = () => {
        this.setState((prevState)=>({removeClicked: !prevState.removeClicked}));
        this.props.startRemoveExpense({ id:this.props.expense.id });
        this.props.history.push('/');
    }
    changeRemoveState = () => {
        this.setState((prevState)=>({removeClicked: !prevState.removeClicked}));
    }
    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}/>
                    <button className="button button--secondary" onClick={this.changeRemoveState}>Remove Expense</button>  
                </div>
                <ConfirmationModal 
                    changeRemoveState = {this.changeRemoveState}
                    removeClicked = {this.state.removeClicked}
                    startRemoveExpense = {this.onClick}
                    expenseDescription = {this.props.expense.description}
                />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense)=> expense.id===props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense: (data)=>dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);