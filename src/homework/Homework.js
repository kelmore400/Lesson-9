import React from 'react';
import styles from './Homework.module.scss';
import { ErrorBoundary } from './ErrorBoundary';
import { Task1 } from './Task1';

export class Homework extends React.Component {
    render(){
        return (
            <div className={styles.container}>
            <h1>Homework</h1>
            <ErrorBoundary>
                <Task1 />
            </ ErrorBoundary>
            <h2 className={styles.errorpage}>Error Page</h2>
            <p className={styles.errorpage}>Проверить работу этого компонента можно, если написать в SupportForm вместо userName - Путин Хуйло </p>
            </div>
        )
    }
}