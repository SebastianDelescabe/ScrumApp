import './Tasks.styles.css';
import React from 'react';
import { useResize } from '../../hooks/useResize';
import { Header } from '../../components/header/Header';
import { Card } from '../../components/card/Card';
import { cardsData } from '../tasks/data';
import { TaskForm } from '../../components/taskForm/TaskForm';

export const Tasks = () => {

    const { isPhone } = useResize()

    const renderAllCards = () => {
        return cardsData.map(data => <Card key={data.id} data={data} />)
    }
    return (
        <>
            <Header />
            <main id='tasks'>
                <TaskForm />
                <section className='wrapper_list'>
                    <div className='list_header'>
                        <h2>Mis tareas</h2>
                    </div>
                    {isPhone ? (
                        <div className='list phone'>{renderAllCards()}</div>)
                        :
                        (<div className="list_group">
                            <div className='list'>
                                <h4>Nuevas</h4>
                                <>{renderAllCards()}</>
                            </div>
                            <div className='list'>
                                <h4>En Proceso</h4>
                                <>{renderAllCards()}</>
                            </div>
                            <div className='list'>
                                <h4>Finalizadas</h4>
                                <>{renderAllCards()}</>
                            </div>
                        </div>)
                    }
                </section>
            </main>
        </>
    )
}
