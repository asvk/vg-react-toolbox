import React, {PropTypes} from 'react';
import NavDrawerPlus from 'react-toolbox-addons/lib/nawdrawerplus';

/**
 * UsersPanel react component
 */
const UsersPanel = ({children, open, onClick, addUser})=> {
    const addUserBtn = {icon: 'person_add', onClick: addUser};
    return (
        <NavDrawerPlus title="Users" active={open} pinned={open} onClick={onClick} buttons={[addUserBtn]}>
            <div style={{overflow: 'auto'}}>
              {children}
            </div>
        </NavDrawerPlus>);
};
UsersPanel.propTypes = {
    /**
     * Callback1<DOMEvent> addUser - callback on user icon click
     */
    addUser: PropTypes.func,
    children: PropTypes.any,
    /**
     * <Boolean> open - property to indicate if the panel is open
     */
    onClick: PropTypes.func,
    /**
     * <Callback1<DOMEvent>> - onClick callback on close icon click
     */
    open: PropTypes.bool
};
export default UsersPanel;
