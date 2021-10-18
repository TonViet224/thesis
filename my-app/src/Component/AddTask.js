
const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='add task' />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type="text" placeholder='add day' />
            </div>
            <div className='form-control'>
                <label>Reminder</label>
                <input type="checkbox" />
            </div>
            <input type="submit" className='btn' value='Save task' style={{ backgroundColor: 'green' }} />
        </form>
    )
}

export default AddTask
