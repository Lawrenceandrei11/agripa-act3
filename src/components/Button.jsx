function Button (props) {
    return (
        <div className="flex justify-center items-center flex-row w-96 mt-3 ml-173">
            <button className="w-15 hover:bg-blue-600 bg-blue-700 text-white rounded-md mr-3 cursor-pointer">
                {props.add}
            </button>
            <button className="w-17 hover:bg-red-600 bg-red-700 text-white rounded-md cursor-pointer">
                {props.del}
            </button>
        </div>
    )
}

export default Button;