"use client"

import { useEffect, useState } from "react"
import { Clock, Home } from "lucide-react"

export default function CottageTimer({ scrollToEnquiry, heading1, heading2 }) {
    // Set target date to March 31st
    const targetDate = "2025-03-31T23:59:59"
    const cottagesLeft = 25

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime()

            if (difference <= 0) {
                setIsExpired(true)
                return
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            })
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    return (
        <main className="flex flex-col items-center justify-center p-4 bg-white border">
            <div className="max-w-4xl w-full py-10 ">
                <div className="overflow-hidden mt-5 ">
                    <div className=" bg-cover bg-center flex items-center justify-center">
                        <h2 className="text-center text-gray-600 text-2xl md:text-3xl font-bold drop-shadow-lg px-4 py-2 rounded-lg">
                            {heading1} <br />
                            {heading2}

                        </h2>
                    </div>

                    <div className="p-6 bg-white">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-center gap-2">
                                <Home className="h-5 w-5 text-gray-800" />
                                <p className="text-gray-800 font-medium text-lg">
                                    Only <span className="font-bold text-gray-900">{cottagesLeft} cottages</span> left!
                                </p>
                            </div>

                            {isExpired ? (
                                <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800 font-medium">This offer has expired</p>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Clock className="h-5 w-5 text-gray-800" />
                                        <p className="text-gray-800 font-medium">Offer ends March 31st</p>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2 md:gap-4">
                                        {Object.entries(timeLeft).map(([label, value]) => (
                                            <div key={label} className="flex flex-col items-center">
                                                <div className="bg-gray-50 w-full aspect-square rounded-lg shadow-inner border border-gray-200 flex items-center justify-center mb-2">
                                                    <span className="text-2xl md:text-4xl font-bold text-gray-900 tabular-nums">
                                                        {value.toString().padStart(2, "0")}
                                                    </span>
                                                </div>
                                                <span className="text-xs md:text-sm text-gray-700 capitalize">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            <button
                                className="mt-2 bg-black hover:bg-[#222] text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                                onClick={scrollToEnquiry}
                            >
                                Book Your Cottage Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

