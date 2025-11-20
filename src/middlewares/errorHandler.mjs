export default (err, req, res, next) => {
    
    console.error("❌ ERROR:", err);

    const status = err.status || 500;

    if (err.errors) {

        return res.status(status).json({
            message: err.message || "Validation error",
            errors: err.errors
        });

    };

    return res.status(status).json({
        message: err.message || "Internal server error"
    });

};