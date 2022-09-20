import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (
        <div className={s.filter}>
            <label className={s.label}>Find contacts by name
            <input
                    type="text"
                    name="filter"
                    value={filter}
                    // onChange={(e) => setText(e.target.value)}
                    onChange={() => dispatch(filterContact({filter}))}
                    className={s.input}
            />
            </label>
        </div>
    )
} 

export default Filter;

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired, 
//     onChange: PropTypes.func.isRequired,
// };


// import PropTypes from 'prop-types';
// import s from './Filter.module.css';

// const Filter = ({filter, onChange}) => {

//     return (
//         <div className={s.filter}>
//             <label className={s.label}>Find contacts by name
//             <input
//                     type="text"
//                     name="filter"
//                     value={filter}
//                     onChange={onChange}
//                     className={s.input}
//             />
//             </label>
//         </div>
//     )
// } 

// export default Filter;

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired, 
//     onChange: PropTypes.func.isRequired,
// };