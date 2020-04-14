import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';

test('Should correctly render ExpenseSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpenseSummary with multiple expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={235111}/>);
    expect(wrapper).toMatchSnapshot();
});