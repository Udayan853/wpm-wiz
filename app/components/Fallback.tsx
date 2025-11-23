import { ThreeDots } from "react-loader-spinner"

export function Fallback() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <ThreeDots
                visible={true}
                height="60"
                width="60"
                color="#D2C1B6"
            />
        </div>
    );
}