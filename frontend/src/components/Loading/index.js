import './index.scss';

/**
 * Loading component that displays a spinner and message.
 *
 */
const Loading = () => {
    return (
        <div className="spinner-container" role="alert" aria-live="polite">
            <div className="spinner" aria-hidden="true"> </div>
            <p className="spinner-message">
                Loading... <br/>
                This may take up to 30 seconds <br/>
                Due to free-tier API hosting backend
            </p>
        </div>
    );
};

export default Loading;
