
import { ServerApp } from "./presentation/server-app";

describe('Test App.ts', () => {
    test('should call Server.run with values', async () => {
        const serverRunMock = jest.fn()
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '5', '-l', '10', '-s', '-n', 'multiplication-table', '-d', 'outputs']

        await import ('./app')
        expect(serverRunMock).toHaveBeenCalledWith({
            base: 5,
            limit: 10,
            show: true,
            name: 'multiplication-table',
            destination: 'outputs'
        })


    })

})