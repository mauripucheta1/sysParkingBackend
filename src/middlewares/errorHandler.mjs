export default (err, req, res, next) => {

    console.error('❌ ERROR:', err);

    const statusCode = err.status || 500;

    let message = err.message || 'Internal server error';

    const response = {
        success: false,
        message,
    };

    if (process.env.NODE_ENV !== 'production') {

        response.error = {
            name: err.name,
            stack: err.stack,
        };

    };

    res.status(statusCode).json(response);

};