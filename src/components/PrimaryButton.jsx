

const PrimaryButton = (props) => {
    return (
        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-2 px-4 rounded-lg mt-2" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton;