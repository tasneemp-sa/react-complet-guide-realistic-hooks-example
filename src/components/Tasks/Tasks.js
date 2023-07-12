import classes from './Tasks.module.css';
import TaskItem from './TaskItem';

const Tasks = (props) => {
    let taskList = <h2>No tasks found. Start adding some!</h2>

    if (props.length > 0) {
        taskList = <ul>
            {props.items.map(task => {
                return <TaskItem key={task.id}>{task.text}</TaskItem >
            })}
        </ul>
    }

    let content = taskList;

    if (props.error) {
        content = <button onClick={props.onFetch}>Try Again</button>;
    }

    if (props.loading) {
        content = 'Loading Tasks...';
    }



    return <section>
        <div className={classes.container}>{content}</div>
    </section>
}

export default Tasks;