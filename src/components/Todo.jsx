function Todo (props) {
    return (
        <div className="flex justify-center items-center flex-col ">
            <div className="flex justify-start items-start flex-row ml-5 w-96">
                <input type="checkbox" className="w-5 h-5 mt-2"/>
                <p className="text-base text-center mt-1.5 ml-3 ml-3 text-lg  underline">{props.one}</p>
            </div>
            <div className="flex justify-start items-start flex-row ml-5 w-96">
                <input type="checkbox" className="w-5 h-5 mt-5"/>
                <p className="text-base text-center mt-4 ml-3 ml-3 text-lg underline">{props.two}</p>
            </div>
            <div className="flex justify-start items-start flex-row ml-5 w-96">
                <input type="checkbox" className="w-5 h-5 mt-5"/>
                <p className="text-base text-center mt-4 ml-3 ml-3 text-lg underline">{props.three}</p>
            </div>
            <div className="flex justify-start items-start flex-row ml-5 w-96">
                <input type="checkbox" className="w-5 h-5 mt-5"/>
                <p className="text-base text-center mt-4 ml-3 ml-3 ml-3 text-lg underline">{props.four}</p>
            </div>
        </div>
    )
}

export default Todo;