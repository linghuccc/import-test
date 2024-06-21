import { defineConfig, loadEnv } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

export default defineConfig(() => {
	loadEnv()
	if (process.env.VITE_TESTNET! === 'true') {
		return {
			out: 'src/generated_dev.ts',
			plugins: [
				foundry({
					deployments: {
						Counter: {
							[chains.sepolia.id]:
								'0x43Cc2D020FC2E910269c86E45de5f2DC08D1dcB9',
						},
					},
					project: './contracts',
					include: ['Counter.json'],
				}),
				react(),
			],
		}
	} else {
		return {
			// production specific config
			out: 'src/generated.ts',
			plugins: [
				foundry({
					deployments: {
						Counter: {
							[chains.sepolia.id]:
								'0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1',
						},
					},
					project: './contracts',
					include: ['Counter.json'],
				}),
				react(),
			],
		}
	}
})
