const loginRegisterController = {};

//página de inicio de sesión
loginRegisterController.showLogin = (req, res) => {
  res.render('login');
};

//inicio de sesión
loginRegisterController.processLogin = (req, res) => {
  const { username, password } = req.body;

  //autenticación
  if (username === 'usuario' && password === 'contraseña') {
    // autenticación exitosa
    res.redirect('/dashboard');
  } else {
    // autenticación fallida (si los datos que ingresó el usuario estan mal)
    res.render('login', { error: 'Credenciales inválidas' });
  }
};

//página de registro
loginRegisterController.showRegister = (req, res) => {
  res.render('register');
};

// Procesar el registro
loginRegisterController.processRegister = (req, res) => {
  const { username, email, password } = req.body;

  // registro
  if (username && email && password) {
    // Registro exitoso
    res.redirect('/login');
  } else {
    // Error en el registro
    res.render('register', { error: 'Por favor completa todos los campos' });
  }
};

export default loginRegisterController;


