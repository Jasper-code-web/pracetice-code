declare module 'express' {

    interface Router {

    }
    interface App {
        use(path:string, router:any): void
        
    }
    interface Express {
        (): App
    }
    const express:Express

    export default express
}