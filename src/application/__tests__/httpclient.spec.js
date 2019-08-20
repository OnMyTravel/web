import httpclient from "../httpclient";

describe('Application | Http client', () => {
    describe('POST method', () => {
        it('should be defined', () => {
            expect(httpclient).toHaveProperty('post')
            expect(httpclient.post).toBeFunction()
        })
    })
})