import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

const ExpensesSummary = ({ expenseCount, totalExpensesCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral(expensesTotal).format('$0,0.00') + ' '}</span>
                    & Number of hidden expenses are <span>{totalExpensesCount - expenseCount}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create"> Add expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        totalExpensesCount: state.expenses.length,
        expensesTotal: selectExpensesTotal(state.expenses),
    }
};
export default connect(mapStateToProps)(ExpensesSummary);