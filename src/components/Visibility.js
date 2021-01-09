import { useDispatch } from 'react-redux'
import { setFilter } from '../actions'
const filters = ['All', 'Completed', 'Incomplete']
const Visibility = () => {

    const dispatch = useDispatch()
    const colorSwitch = (filter) => {
        switch (filter) {
            case 'Incomplete':
                return 'btnIncomplete'
            case 'Completed':
                return 'btnComplete'
            case 'All':
                return 'btnAll'
            default:
                return 'btnIncomplete'
        }
    }
    return(
        <div className='visContainer'>
            {
                filters.map(filter => {
                    return(
                        <button key={filter} 
                                onClick={()=>dispatch(setFilter(filter))}
                                className={colorSwitch(filter)}>
                                    {filter}
                        </button>
                    )
                })
            }
        </div>
    )
}
export default Visibility;