import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [alert, setAlert] = useState({ show: false });
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');

    const handleCharge = (e) => {
        setCharge(e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.valueAsNumber);
    };

    const handleDelete = (id) => {
        const newExpense = expenses.filter((expense) => {
            return expense.id !== id;
        });
        setExpenses(newExpense);
        handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (charge !== '' && amount > 0) {
            if (edit) {
                const newExpense = expenses.map((item) => {
                    return item.id === id ? { ...item, charge, amount } : item;
                });
                setExpenses(newExpense);
                setEdit(false);
                handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' });
            } else {
                const newExpenses = {
                    id: crypto.randomUUID(),
                    charge,
                    amount,
                };
                setExpenses([...expenses, newExpenses]);
                handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
            }
            setCharge('');
            setAmount('');
        } else {
            console.error('error');
            handleAlert({ type: 'danger', text: '상품은 빈 값이 수 없으며, 비용은 0보다 커야합니다.' });
        }
    };

    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 5000);
    };

    const handelEdit = (id) => {
        const expense = expenses.find((item) => {
            return item.id === id;
        });
        const { charge, amount } = expense;
        setEdit(true);
        setCharge(charge);
        setAmount(amount);
        setId(id);
    };

    const clearItems = () => {
        setExpenses([]);
    };

    return (
        <main className='main-container'>
            <div className='sub-container'>
                {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
                <h1>장바구니</h1>
                <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                    {/* form */}
                    <ExpenseForm
                        charge={charge}
                        handleCharge={handleCharge}
                        amount={amount}
                        handleAmount={handleAmount}
                        handleSubmit={handleSubmit}
                        edit={edit}
                    />
                </div>
                <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                    {/* List */}
                    <ExpenseList
                        initialExpenses={expenses}
                        handleDelete={handleDelete}
                        handelEdit={handelEdit}
                        clearItems={clearItems}
                        expenses={expenses}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
                    <p style={{ fontSize: '2rem' }}>
                        총합계 :
                        <span>
                            {expenses.reduce((acc, cur) => {
                                return (acc += cur.amount);
                            }, 0)}
                            원
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default App;
