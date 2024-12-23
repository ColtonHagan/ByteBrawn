import { useEffect } from 'react'
import PropTypes from 'prop-types';
import CloseButton from "../CloseButton";
import ReactDOM from 'react-dom';
import "./index.scss";

/**
 * PopUpContainer is a wrapper component that renders a modal dialog using React Portals.
 * It manages background scroll-locking when the modal is open and provides a close button.
 * 
 * @param {boolean} display - Controls whether the popup is visible or not.
 * @param {function} onClose - Function to close the popup.
 * @param {node} children - Elements or components to display inside the popup.
 * @param {string} size - The size of the popup; can be 'small', 'medium', or 'large'.
 */
const PopUpContainer = ({ display = false, onClose, children, size = "large" }) => {
    // Hides scroll wheel of "background" when pop-up is mounted
    useEffect(() => {
        if (display) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => document.body.classList.remove('no-scroll');
    }, [display])

    // Only renders pop-up as needed
    if(!display) return null;

    return ReactDOM.createPortal(
        <div>
            <div className="popup-overlay" />
            <div className={`pop-up ${size}`}>
                <CloseButton onClick={onClose} />
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    );
};

// PropTypes validation
PopUpContainer.propTypes = {
    display: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.array
    ]),
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']) 
};

export default PopUpContainer;