import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilterss from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilterss />
        <ExpenseList />
    </div>
);
export default ExpenseDashboardPage;