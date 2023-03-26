

function Button({ onPress, children }) {
    return (
        <div onClick={onPress} className="button__container">
            <p>{children}</p>
        </div>
    )
}

export default Button;