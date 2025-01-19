module.exports = (err, req, res, next) => {
    console.error(`[ERROR]: ${err.message}`);
  
    // Responder con un mensaje de error
    res.status(500).json({
      error: true,
      message: err.message || 'Ocurrió un error inesperado.',
    });
  };
  