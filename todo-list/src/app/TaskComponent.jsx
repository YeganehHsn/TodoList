const Task = (props) => {
  return (
    <div className='flex items-center'>
      <h3
        className='text-xl text-left mx-2 mb-2 text-zinc-950 rounded'
        style={{ backgroundColor: props.task.iscompleted ? '#89eb8c' : '#fff' }}
      >
        {props.task.taskName}
      </h3>
      <span
        className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer mx-1 hover:bg-red-600'
        onClick={() => props.deleteTask(props.task.id)}
      >
        Delete
      </span>
      <span
        className='bg-green-500 text-white px-3 py-1 rounded cursor-pointer mx-1 hover:bg-green-600'
        onClick={() => props.completeTask(props.task.id)}
      >
        Completed
      </span>
    </div>
  );
};

export default Task;