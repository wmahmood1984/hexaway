import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";

export default function ConnectButton() {
    const { open} = useAppKit()
    const {disconnect} = useDisconnect()

    const { address, isConnected,  } = useAppKitAccount()
    
    return (
        <div>
           {  <button

           className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-base"
                onClick={async () => {
                    if (isConnected) {
                        await disconnect()
                    } else {
                        await open()
                    }
                }}
                // style={{
                //     border: "2px solid blue",
                //     padding: "10px 20px",
                //     backgroundColor: "transparent",
                //     cursor: "pointer",
                //     transition: "border-color 0.3s"
                // }}
                onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "green";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "blue";
                }}
            >
                {isConnected ? `${address.slice(0,4)}...${address.slice(-5)}` : "🔗 Connect Wallet"}
            </button>}

        </div>
    )
}
