
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message)
            this.statusCode = statusCode;

            //create stack property (optional for dev purpose)
            Error.captureStackTrace(this, this.constructor);
    }
}

export default ErrorHandler