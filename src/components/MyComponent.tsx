'use client'

import { useEffect, useState } from 'react'

// 动态导入 Hook
const loadHook = async () => {
	if (process.env.NEXT_PUBLIC_TESTNET === 'true') {
		const { useReadCounterShowNumber } = await import('../generated_dev')
		return useReadCounterShowNumber
	} else {
		const { useReadCounterShowNumber } = await import('../generated')
		return useReadCounterShowNumber
	}
}

const MyComponent = () => {
	const [counterNumber, setCounterNumber] = useState<any>(null)
	const [useReadCounterShowNumber, setUseReadCounterShowNumber] =
		useState(null)

	useEffect(() => {
		const loadCounterHook = async () => {
			const hook = await loadHook()
			setUseReadCounterShowNumber(() => hook)
		}

		loadCounterHook()
	}, [])

	useEffect(() => {
		if (useReadCounterShowNumber) {
			const { data } = useReadCounterShowNumber()
			setCounterNumber(data)
		}
	}, [useReadCounterShowNumber])

	if (counterNumber === null) {
		return <div>Loading...</div>
	}

	return <div>Number is {counterNumber.toString()}</div>
}

export default MyComponent
