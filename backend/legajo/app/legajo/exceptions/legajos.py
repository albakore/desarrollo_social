from core.exceptions import CustomException


class PasswordDoesNotMatchException(CustomException):
    code = 401
    error_code = 20000
    message = "La contraseña no coincide"

class LegajoNotFoundException(CustomException):
    code = 404
    error_code = 20001
    message = "Legajo no encontrado"
