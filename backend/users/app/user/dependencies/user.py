from fastapi import Depends
from core.database.session import get_session
from app.user.services.user import UserService
from app.user.repository.user import UserRepository

DUserRepository: UserRepository = Depends(UserRepository)
DUserService : UserService = Depends(UserService)

