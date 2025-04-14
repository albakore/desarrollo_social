from abc import ABC, abstractmethod

from fastapi import Depends
from pydantic import BaseModel
from sqlmodel import SQLModel, select
from sqlmodel.ext.asyncio.session import AsyncSession
from app.user.repository.user import UserRepository
from core.database.session import get_session
from models import User
from app.user.exceptions.users import UserNotFoundException

class UserServiceBase(ABC):

	@abstractmethod
	def get_users(self):
		...
	
	@abstractmethod
	def get_user(self, user_id: int):
		...
	
	@abstractmethod
	def create_user(self):
		...
	
	@abstractmethod
	def update_user(self, user_id: int, modificacion: SQLModel):
		...
	
	@abstractmethod
	def delete_user(self, user_id: int):
		...

class UserService(UserServiceBase):

	def __init__(self, db_session : AsyncSession = Depends(get_session)):
		self.repo = UserRepository(db_session)
		

	async def get_users(self):
		data = await self.repo.get_users()
		return data

	async def get_user(self, user_id: int):
		user = await self.repo.get_user(user_id)
		return user

	async def create_user(self, new_user : BaseModel):
		user = User.model_validate(new_user)
		async with self.repo.session.begin():
			try:
				await self.repo.save(user) 
				await self.repo.session.commit()
				await self.repo.session.refresh(user)
			except Exception as e:
				await self.repo.session.rollback()
				raise e
			return user

	async def update_user(self, user_id: int, modificacion: BaseModel):
		async with self.repo.session.begin():
			try:
				user = User.model_validate(modificacion)
				user_modificado = await self.repo.update(user_id,user)
				await self.repo.session.commit()
				await self.repo.session.refresh(user_modificado)
			except Exception as e:
				await self.repo.session.rollback()
				raise e
			return user_modificado

	async def delete_user(self, user_id: int):
		async with self.repo.session.begin():
			try:
				user = await self.repo.get_user(user_id)
				if not user:
					raise UserNotFoundException
				await self.repo.delete(user)
				await self.repo.session.commit()
				return True
			except Exception as e:
				await self.repo.session.rollback()
				raise e

