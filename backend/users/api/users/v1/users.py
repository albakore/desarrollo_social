from fastapi import APIRouter
from app.user.dependencies.user import (
	DUserRepository,
	DUserService
)
from api.users.v1.request import *

users = APIRouter()

@users.get("")
async def get_all_users(
	user_service = DUserService
):
	users = await user_service.get_users()
	return users

@users.get("/{id}")
async def get_user(
	id : int,
	user_service = DUserService
):
	user = await user_service.get_user(int(id))
	return user

@users.post("")
async def create_user(
	nuevo_user : CreateUserRequest,
	user_service = DUserService
):
	user = await user_service.create_user(nuevo_user)
	return user

@users.put("/{id}")
async def update_user(
	id : int,
	user_modificado : UpdateUserRequest,
	user_service = DUserService
):
	user = user_service.update_user(int(id),user_modificado)
	return user

@users.delete("/{id}")
async def delete_user(
	id : int,
	user_service = DUserService
):
	data = await user_service.delete_user(int(id))
	return data