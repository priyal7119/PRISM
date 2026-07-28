function Button({
    children,
    variant = "primary",
    onClick,
    className = ""
}) {

    const styles = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
            "bg-gray-200 text-black hover:bg-gray-300",

        outline:
            "border border-blue-600 text-blue-600 hover:bg-blue-50",

        danger:
            "bg-red-600 text-white hover:bg-red-700"
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-medium transition ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;