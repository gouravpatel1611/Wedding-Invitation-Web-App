import swastik from "../assets/swastik.png"

function Swastik() {
    return (
        <div>
            <img
                src={swastik}
                alt="swastik"
                style={{
                    width: "50px",
                }}
            />
        </div>
    )
}

export default Swastik;