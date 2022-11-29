import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/cars/slice';


export const CarSearch = () => {
    const dispatch = useDispatch()
    return (
            <input
                type="text"
                placeholder="Search"
                onChange={({ target }) =>
                dispatch(setSearch(target.value))
                }
            />
    )
}