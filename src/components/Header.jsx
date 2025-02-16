function Header (props) {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mt-10 ">
                <p className="font-bold text-2xl">{props.title}</p>
            </div>
        </div>
    )
}

export default Header;