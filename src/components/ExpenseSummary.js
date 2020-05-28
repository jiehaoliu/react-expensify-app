import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount, expensesTotal, numOfAllExpenses})=>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    const hiddenExpensesNum = numOfAllExpenses-expenseCount;
    const hiddenExpenseWord = hiddenExpensesNum === 1 ? 'expense' : 'expenses';
    return (   
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span> {expenseCount} </span> {expenseWord} totalling <span> {formattedExpensesTotal} </span></h1>
                {hiddenExpensesNum>0 && <h3 className="page-header__title">Not showing <span>{hiddenExpensesNum}</span> {hiddenExpenseWord} because of filters</h3>}
                {hiddenExpensesNum===0 && <h3 className="page-header__title">Showing all expenses, no filters in place</h3>}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>{
    const visibleExpenses =  selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        numOfAllExpenses: state.expenses.length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);