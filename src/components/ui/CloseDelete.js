import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteButtonClose } from '../../actions/ui';


export const CloseDelete = () => {
    const dispatch = useDispatch();
    const { deleteButton } = useSelector(state => state.ui);

    const handleDisableDeleteButton = () => {
        dispatch(deleteButtonClose());
    }
    return (
        deleteButton && (
            <button className="btn btn-danger ui__btnfix-br2" onClick={handleDisableDeleteButton}>
                Hide Delete button <i className="fas fa-trash-alt"></i>
            </button>
        )
    )
}
